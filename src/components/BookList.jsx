// BookList riceve dalle props un array di libri, sotto il nome di "arrayOfBooks"

import { Container, Form, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { useState } from "react";
import CommentArea from "./CommentArea";

const BookList = function (props) {
  const [search, setSearch] = useState("");
  const [asin, setAsin] = useState("");

  const changeAsin = (newAsin) => {
    setAsin(newAsin);
  };

  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col xs={12} md={6}>
          <Form.Control
            type="text"
            placeholder="cerca un libro"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8}>
          <Row>
            {props.arrayOfBooks
              .filter((libro) => {
                if (libro.title.toLowerCase().includes(search.toLowerCase())) {
                  return true;
                } else {
                  return false;
                }
              })

              .map((libro) => {
                return (
                  <SingleBook
                    book={libro}
                    key={libro.asin}
                    cambiaAsin={changeAsin}
                    asinLibroSelezionato={asin}
                  />
                );
              })}
          </Row>
        </Col>
        <Col xs={12} md={4}>
          <CommentArea asin={asin} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
