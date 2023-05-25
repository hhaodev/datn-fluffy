import { useParams, useNavigate, redirect } from "react-router";
import checkout from "../../assets/images/accepted.png";
import "./index.css";
import { useEffect, useState } from "react";
import { gql } from "@apollo/client";
import client from "../../configGQL";
import dayjs from "dayjs";
import { addEvent } from "../../google";

const GET_MY_PAYMENT = gql`
  query getPaymentTransaction($query: QueryFilterDto!) {
    getMyPaymentTransactions(query: $query) {
      items {
        id
        amount
        bookedSession {
          data
          course {
            name
          }
        }
      }
    }
  }
`;

const CheckoutSuccessComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [value, setValue] = useState(null);

  useEffect(() => {
    client
      .query({
        query: GET_MY_PAYMENT,
        variables: {
          query: {
            limit: 1,
            page: 1,
            filters: [
              {
                field: "bookedSession.courseId",
                data: id,
                operator: "eq",
              },
            ],
          },
        },
      })
      .then((response) => {
        setValue(response.data.getMyPaymentTransactions.items[0]);
      })
      .catch((error) => {
        console.log("🚀 ~ file: index.js:52 ~ useEffect ~ error:", error);
      });
  }, []);

  const event = {
    summary: "Google I/O 2015",
    location: "800 Howard St., San Francisco, CA 94103",
    description: "A chance to hear more about Google's developer products.",
    start: {
      dateTime: "2023-05-25T09:00:00-07:00",
      timeZone: "America/Los_Angeles",
    },
    end: {
      dateTime: "2023-05-25T10:00:00-07:00",
      timeZone: "America/Los_Angeles",
    },
    recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
    attendees: [
      { email: "fluffy.team.dev@gmail.com" },
      { email: "thanhhoang280202@gmail.com" },
    ],
    reminders: {
      useDefault: false,
      overrides: [
        { method: "email", minutes: 24 * 60 },
        { method: "popup", minutes: 10 },
      ],
    },
  };

  return (
    <div className="checkout-success-page">
      <div className="checkout-success-form">
        <div className="checkout-logo">
          <img src={checkout} />
        </div>
        <h3>Thanks for your order!</h3>
        {value && (
          <div className="checkout-detail">
            <h3>
              {value.bookedSession.course.name} - ${value.amount}
            </h3>
            <p>
              Start Time:
              <span>
                {dayjs(value.bookedSession.data.startDate).format("MM/DD/YYYY")}
                - {dayjs(value.bookedSession.data.startDate).format("HH:mm:ss")}
              </span>
            </p>
            <p>
              End Time:{" "}
              <span>
                {" "}
                {dayjs(value.bookedSession.data.endDate).format(
                  "MM/DD/YYYY"
                )}- {dayjs(value.bookedSession.data.endDate).format("HH:mm:ss")}
              </span>
            </p>
          </div>
        )}

        <div className="checkout-content">
          <p>
            Woohoo! Your payment was successfull, and your order is complete
          </p>
          <p>
            A receipt and download instructions are on their way to your inbox
          </p>
        </div>
        <button
          onClick={() => {
            navigate("/schedules");
          }}
        >
          Add Course To Your Calender
        </button>
      </div>
    </div>
  );
};

export default CheckoutSuccessComponent;
