import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from './routes';
import { Fragment, useEffect } from "react";
import DefaultLayout from "./layout/DefaultLayout";
import client from "./configGQL";
import { gql } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./Redux/features/userSlice";
import { setSchools } from "./Redux/features/schoolsSlice";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    client.query({
      query: gql`
      query getSchools($queryParams: QueryFilterDto!) {
        getSchools(queryParams: $queryParams) {
          items{
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
          page: 1
        }
      }
    })
      .then(result => {
        dispatch(setSchools(result.data.getSchools.items))
      })
      .catch(error => {})
  }, [])


  useEffect(() =>  { 
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
      .catch(error => {})
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
