import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";
import { getActiveElement } from "@testing-library/user-event/dist/cjs/utils/index.js";

describe("Is Welcome there?", () => {
  it("mount correctly Welcome", () => {
    render(<Welcome />);
    const element = screen.getByText(/Hey, nice to see you/i);
    expect(element).toBeTruthy();
  });
});
