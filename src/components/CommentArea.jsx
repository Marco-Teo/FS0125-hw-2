import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";

const CommentArea = function (props) {
  const [reviews, setReviews] = useState([]);

  const getReviews = () => {
    fetch(URL + props.asin, {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYWIwMjViMjYxNTAwMTk4YTY5NmEiLCJpYXQiOjE3NDM2OTM5NzksImV4cCI6MTc0NDkwMzU3OX0.lwf-ZIFoaovBa04KJbdJgNOkivE8F7TkiASjtoOsHWs",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("recensioni non recuperate");
        }
      })
      .then((data) => {
        console.log("DATA", data);

        setReviews(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (props.asin) {
      getReviews();
    }
  }, [props.asin]);

  return (
    <div>
      <h2>COMMENTAREA</h2>
      <AddComment asin={props.asin} />
      <CommentsList reviews={reviews} />
    </div>
  );
};

export default CommentArea;
