import "../StudentMyCourse/studentmycourse.css";
import React, { useEffect } from "react";
import { useState } from "react";
import course4 from "../../assets/images/course4.jpg";
import course5 from "../../assets/images/course5.jpg";
import CourseMyStudent from "../../component/CourseMyStudent";
import { gql } from "@apollo/client";
import client from "../../configGQL";

const GET_MY_COURSES = gql`
  query getMyCourses($query:  QueryFilterDto!){
    getMyCourses(query: $query){
      items{
        id
        imageUrl 
        name
        description
        price 
        spendTime
        category{
          name
          id
        }
        coursePrograms{
          title
          description
          courseProgramPhases{
            name
            order
            content
            overviewUrl
          }
        }
        tutorProfile{
          tutor{
            firstName
            lastName
          }
        }
      }
    }
  }
`

function StudentMyCourse() {
  const [coureseList, setCoureseList] = useState([])
  console.log("🚀 ~ file: index.js:49 ~ StudentMyCourse ~ coureseList:", coureseList)

  useEffect(() => {
    client
      .query({
        query: GET_MY_COURSES,
        variables: {
          query: {
            limit: 10,
            page: 1,
          }
        }
      })
      .then(result => {
        setCoureseList(result.data.getMyCourses.items)
      })
  }, [coureseList]);
  return (
    <>
      <section id="content">
        <main>
          <div className="course__head-title">
            <div className="course__left">
              <h1 className="course__ch1">Course in Progress</h1>
              <div className="course__boxall">
                {coureseList.map(data => {
                  return <CourseMyStudent data={data} />
                })}
              </div>
            </div>

            <div className="course__right">
              <h1 className="course__ch1">Up Coming Class</h1>
              <div className="box__all2">
                <div className="course__box2">
                  <img alt="" src={course4} className="course__2img"></img>
                  <h3>
                    English for Beginners: Intensive Spoken English Course
                  </h3>
                  <p>Today 12:00 PM - 15:00 PM</p>
                </div>

                <div className="course__box2">
                  <img  alt="" src={course5} className="course__2img"></img>
                  <h3>Best Way to Learn German Language: Full Beginner</h3>
                  <p>Today 15:00 PM - 17:00 PM</p>
                </div>

                <div className="course__box2">
                  <img  alt="" src={course5} className="course__2img"></img>
                  <h3>
                    Web Design for Beginners: Real World Coding in HTML & CSS
                  </h3>
                  <p>Today 12:00 PM - 17:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </>
  );
}

export default StudentMyCourse;
