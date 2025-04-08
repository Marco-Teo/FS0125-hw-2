import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";

const AddComment = function (props) {
  const [review, setReview] = useState({
    comment: "",
    rate: "3",
    elementId: props.asin,
  });
  const sendReview = (e) => {
    e.preventDefault();
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2Y1MTIyNTgxYjBkZDAwMTUwYTdhNjMiLCJpYXQiOjE3NDQxMTQyMTQsImV4cCI6MTc0NTMyMzgxNH0._dHTxhMkP_3ib5823j-5IAO3cWmCLA0FFQ5DJunW-xo",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("COMMENTO INVIATO!");
        } else {
          throw new Error("commento NON inviato");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setReview({
      ...review,
      elementId: props.asin,
    });
  }, [props.asin]);

  return (
    <Form onSubmit={sendReview}>
      <Form.Group className="mb-3">
        <Form.Label>Testo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Bello sto libro!"
          value={review.comment}
          required
          onChange={(e) => {
            setReview({
              ...review,
              comment: e.target.value,
            });
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Voto</Form.Label>
        <Form.Select
          value={review.rate}
          onChange={(e) => {
            setReview({
              ...review,
              rate: e.target.value,
            });
          }}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
      </Form.Group>
      <Button variant="success" type="submit">
        INVIA
      </Button>
    </Form>
  );
};

export default AddComment;
