import "../MessStudent/messstudent.css";
import Chatbox from "../../component/Chatbox";
import { useState } from "react";
import client from "../../configGQL";
import { gql } from "@apollo/client";

const GET_CONVERSATIONS = gql`
  query getMyConversations($query: QueryFilterDto!) {
    getMyConversations(query: $query) {
      items {
        id
        name
        avatarUrl
        members
      }
      meta {
        totalItems
        itemCount
        currentPage
      }
    }
  }
`;

function MessStudent() {
  const [myConversations, setMyConversation] = useState(null);

  useState(() => {
    client
      .query({
        query: GET_CONVERSATIONS,
        variables: {
          query: {
            limit: 100,
            page: 1,
          },
        },
      })
      .then((response) => {
        setMyConversation(response.data.getMyConversations.items);
      });
  }, []);

  return <>{myConversations && <Chatbox conversations={myConversations} />}</>;
}

export default MessStudent;
