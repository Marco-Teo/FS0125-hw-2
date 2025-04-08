import { Card, Button, Col } from "react-bootstrap";

const SingleBook = function (props) {
  return (
    <Col xs={12} md={6} lg={3}>
      <Card
        style={{
          border:
            props.asinLibroSelezionato === props.book.asin
              ? "2px solid red"
              : "1px solid gray",
        }}
      >
        <Card.Img
          variant="top"
          src={props.book.img}
          onClick={() => {
            props.cambiaAsin(props.book.asin);
          }}
        />
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
          <Card.Text>
            {props.book.category} - {props.book.price}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
