import CommentArea from "../components/CommentArea";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("is comment are rendered?", () => {
  it("Comment Area mounted?", () => {
    render(<CommentArea />);
    const commentArea = screen.getByText(/COMMENTAREA/i);
    expect(commentArea).toBeInTheDocument();
  });
});
