import { useDispatch, useSelector } from 'react-redux';
import '../Schedules/schedules.css'
import { Calendar } from "antd";
import dayjs from 'dayjs';
import { useState } from 'react';
import { gql } from '@apollo/client';
import { setError } from '../../Redux/features/notificationSlice';
import client from '../../configGQL';

export const SCHEDULE_BY_TUTOR = gql`
  query getSchedule($query: QueryFilterDto!, $tutorId:String!) {
    getSchedulesForTutor(query: $query,  tutorId:$tutorId) {
      items {
        id
        isCompleted
        learnTime {
          endTime
          startTime
          date
          set {
            course {
              name
            }
          }
        }
      }
    }
  }
`;

function Schedulestt() {
  const id = useSelector(state=>state.user.currentUser.id)
  const dispatch = useDispatch();
  const [schedules, setSchedules] = useState(null);
  const [year, setYear] = useState(() => dayjs().get("year"));

  useState(() => {
    client
      .query({
        query: SCHEDULE_BY_TUTOR,
        variables: {
          query: {
            limit: 99,
            page: 1,
          },
          tutorId: id,
        },
      })
      .then((response) => {
        setSchedules(response.data.getSchedulesForTutor.items);
      })
      .catch((error) => {
        dispatch(setError({ message: error.message }));
      });
  }, [year]);


  return (
    <>
      <section id="content">
        <main>
          <div className="course__head-title">
            <div className="course__left">
              <h1>My Schedule</h1>
            </div>
          </div>

          <div className="schedule__app">
            <Calendar
              className="schedule__calen"
              dateCellRender={(date) => {
                const renders =
                  schedules &&
                  schedules.map((schedule) => {
                    if (
                      dayjs(date).format("YYYY-MM-DD") ===
                      schedule.learnTime.date
                    ) {
                      return (
                        <li
                          className={
                            schedule.isCompleted ||
                            dayjs(new Date()).isAfter(
                              dayjs(
                                `${schedule.learnTime.date} ${schedule.learnTime.endTime}`
                              )
                            )
                              ? "schedule-li-content completed"
                              : "schedule-li-content"
                          }
                        >
                          <h5>{schedule.learnTime.set.course.name}</h5>
                          <p>
                            {schedule.learnTime.startTime} -
                            {schedule.learnTime.endTime}
                          </p>
                        </li>
                      );
                    }
                  });

                return renders;
              }}
            />
          </div>
        </main>
      </section>
      {/* CONTENT */}
    </>
  );
}

export default Schedulestt;