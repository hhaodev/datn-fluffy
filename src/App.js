import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import { publicRoutes } from "./routes";
import { Fragment, useEffect, useState } from "react";
import DefaultLayout from "./layout/DefaultLayout";
import client from "./configGQL";
import { gql } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { setSchools } from "./Redux/features/schoolsSlice";
import { UserType } from "./constraint";
import { routerStudent, routerTutor } from "./routes/index";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log("🚀 ~ file: App.js:20 ~ App ~ currentUser:", currentUser);
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
              type
            }
          }
        `,
      })
      .then((result) => {
        setType(result.data.getMe.type);
      })
      .catch((error) => {
        redirect("/sign-in");
      });
  }, [currentUser]);

  return (
    <>
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
                    <Page />
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
