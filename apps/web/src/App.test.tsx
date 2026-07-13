import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { App } from "./main";

test("renders foundation workbench", () => {
  render(<App />);
  expect(screen.getByText("Foundation Workbench")).toBeInTheDocument();
});
