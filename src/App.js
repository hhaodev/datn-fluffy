import { Routes, Route, redirect, useNavigate } from "react-router-dom";
import { publicRoutes } from "./routes";
import { Fragment, useEffect, useState } from "react";
import DefaultLayout from "./layout/DefaultLayout";
import client from "./configGQL";
import { gql } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { setSchools } from "./Redux/features/schoolsSlice";
import { UserType } from "./constraint";
import { routerStudent, routerTutor } from "./routes/index";
import "./App.css";
import NotificationComponent from "./component/Notification";
import { setCurrentUser } from "./Redux/features/userSlice";

function App() {
  const error = useSelector((state) => state.error.content);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (error.message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [error]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);

  const [type, setType] = useState(null);

  useEffect(() => {
    client
      .query({
        query: gql`
          query getSchools($queryParams: QueryFilterDto!) {
            getSchools(queryParams: $queryParams) {
              items {
                name
                id
                location
              }
            }
          }
        `,
        variables: {
          queryParams: {
            limit: 10,
            page: 1,
          },
        },
      })
      .then((result) => {
        dispatch(setSchools(result.data.getSchools.items));
      })
      .catch((error) => {});

    client
      .query({
        query: gql`
          query getMe {
            getMe {
              id
              lastName
              firstName
              type
              isOnboarded
            }
          }
        `,
      })
      .then((result) => {
        setType(result.data.getMe.type);
        dispatch(setCurrentUser(result.data.getMe))
      })
      .catch((error) => {
        redirect("/sign-in");
      });
  }, [currentUser]);

  return (
    <>
      {visible && <NotificationComponent error={error} />}
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = DefaultLayout;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>

      {type === UserType.STUDENT && (
        <Routes>
          {routerStudent.map((route, index) => {
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout type={type}>
                    {route.layout2 && <route.layout2 />}
                    <route.component />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      )}
      {type === UserType.TUTOR && (
        <Routes>
          {routerTutor.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout type={type}>
                    {route.layout2 && <route.layout2 />}
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      )}
    </>
  );
}

export default App;
