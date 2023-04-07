import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from './routes';
import { Fragment, useEffect } from "react";
import DefaultLayout from "./layout/DefaultLayout";
import client from "./configGQL";
import { gql } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./Redux/features/userSlice";

function App() {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user.currentUser)

  useEffect(() =>  {
    if (Object.values(currentUser).length === 0) 
    {
      client.query({
        query: gql`
        query {
          getMe{
            id
            email
            lastName
            firstName
          }
        }
      `
      }).then(result => {
        dispatch(setCurrentUser(result.data.getMe))
      })
      .catch(error => {
        console.error(error);
      })
    }
  }, [])
  

  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        const Page = route.component
        let Layout = DefaultLayout
        if (route.layout) {
          Layout = route.layout
        } else if (route.layout === null) {
          Layout = Fragment
        }

        return <Route
          key={index}
          path={route.path}
          element={
            <Layout>
              <Page />
            </Layout>
          }
        />
      })}
    </Routes>
  );
}

export default App;
