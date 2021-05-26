import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", function() {
  render(<Card 
      caption="Photo by Richard Pasquarella on Unsplash" 
      src="./image1.jpg" 
      currNum="1" 
      totalNum="3"/>);
});

it("matches snapshot", function() {
  const { container } = render(<Card 
      caption="Photo by Richard Pasquarella on Unsplash" 
      src="./image1.jpg" 
      currNum="1" 
      totalNum="3"/>);
  expect(container).toMatchSnapshot();
});