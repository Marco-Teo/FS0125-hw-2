import AllTheBooks from "../components/AllTheBooks";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("all the cards", () => {
  it("are all the cards exposed?", () => {
    render(<AllTheBooks />);
    const books = screen.getAllByTestId("book-card");
    expect(books).toBeTruthy();
    expect(books.length).toBeGreaterThan(0);
  });
});
