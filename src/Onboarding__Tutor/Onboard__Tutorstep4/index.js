import React, { useEffect, useState } from "react";
import "../../Onboarding__Tutor/Onboard__Tutorstep4/OnboardTutor__Step4.css";
import { Button, Steps, Input } from "antd";
import CheckBoxComponent from "../../Utils/CheckBox/CheckBox";
import client from "../../configGQL";
import { gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { setError } from "../../Redux/features/notificationSlice";
import { useDispatch } from "react-redux";

const HAS_CONNECTED_STRIPE = gql`
  query hasVerifyStripe($accountId: String!) {
    hasVerifyByStripe(accountId: $accountId) {
      isStripeVerified
    }
  }
`;

function OnboardTutor__Step4() {
  const description = "";
  const items = [
    {
      title: "Done",
      description,
    },
    {
      title: "Done",
      description,
    },
    {
      title: "Done",
      description,
    },
    {
      title: "Waiting",
      description,
    },
  ];
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [isStripeVerified, SetIsStripeVerified] = useState(false);
  const [changeAccount, SetchangeAccount] = useState(false);
  const [isChecked, SetIsChecked] = useState(false);

  useEffect(() => {
    client
      .query({
        query: gql`
          query {
            getTutorProfile {
              stripeAccountId
              isStripeVerified
              status
            }
          }
        `,
      })
      .then((result) => {
        setId(result.data.getTutorProfile.stripeAccountId);
        SetIsStripeVerified(result.data.getTutorProfile.isStripeVerified);
        SetIsChecked(true);
      })
      .catch((error) => {});
  }, []);

  const handleSubmit = () => {
    if (changeAccount) {
      client
        .query({
          query: HAS_CONNECTED_STRIPE,
          variables: {
            accountId: id,
          },
        })
        .then((response) => {
          if (response?.data?.hasVerifyByStripe?.isStripeVerified) {
            SetIsStripeVerified(true);
            SetIsChecked(true);
            navigate("/pending");
          } else {
            SetIsStripeVerified(false);
            SetIsChecked(true);
          }
        })
        .catch((error) => {
          SetIsStripeVerified(false);
          SetIsChecked(true);
        });
    } else {
      if (isStripeVerified) {
        navigate("/pending");
      } else {
        SetIsStripeVerified(false);
        SetIsChecked(true);
      }
    }
  };

  const handleCreate = () => {
    client
      .query({
        query: gql`
          query connectStripeAccount {
            connectStripeAccount {
              connectedAccountUrl
            }
          }
        `,
      })
      .then((result) => {
        window.location.href = result.data.connectStripeAccount.connectedAccountUrl;
      })
      .catch((error) => {
        dispatch(setError({ message: error.message }));
      });
  };

  return (
    <div className="step1__body step4__body">
      <div className="step1__step">
        <>
          <Steps
            current={3}
            labelPlacement="vertical"
            items={items}
            className="step1__stepss"
          />
        </>
      </div>
      <div className="step4__wrapper">
        <div className="box__step4">
          <h2 className="step4__h2">Stripe</h2>
          <CheckBoxComponent
            isActive={id && isChecked}
            isChecked={isStripeVerified}
            message={
              isStripeVerified
                ? "Account has verified successfully"
                : "Oops. Some thing went wrong!"
            }
          ></CheckBoxComponent>

          <div className="stripe-input-form">
            <div className="stripe-input">
              {!id && (
                <label
                  htmlFor="stripe-account-id"
                  style={{
                    fontFamily: "Roboto",
                  }}
                >
                  Please enter your stripe account id
                </label>
              )}
              <Input
                name="stripe-account-id"
                id="stripe-account-id"
                placeholder="acct_###########"
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                  SetchangeAccount(true);
                  SetIsChecked(false);
                }}
                required
              />
            </div>
            <button className="btn-submit-step4" onClick={handleSubmit}>
              Submit
            </button>
          </div>

          <div className="step4__fot">
            <p>Do not have an account?</p>
            <Button onClick={() => handleCreate()}>
              Create a connected account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnboardTutor__Step4;
