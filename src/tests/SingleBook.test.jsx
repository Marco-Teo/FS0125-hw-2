import SingleBook from "../components/SingleBook";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { useState } from "react";

const fakeBook = {
  asin: "12345",
  title: "Test Book",
  img: "https://example.com/test.jpg",
  category: "Fantasy",
  price: "$10",
};
const TestWrapper = () => {
  const [libroSelezionato, setLibroSelezionato] = useState("");

  const cambiaAsin = (newAsin) => {
    setLibroSelezionato(newAsin);
  };

  return (
    <SingleBook
      book={fakeBook}
      asinLibroSelezionato={libroSelezionato}
      cambiaAsin={cambiaAsin}
    />
  );
};

describe("Is border red?", () => {
  it("is variant=danger?", () => {
    render(<TestWrapper />);
    const imgElement = screen.getByRole("img");
    const cardElement = imgElement.closest(".card");
    expect(cardElement).not.toHaveStyle("border: 2px solid red");
    fireEvent.click(imgElement);
    expect(cardElement).toHaveStyle("border: 2px solid red");
  });
});
