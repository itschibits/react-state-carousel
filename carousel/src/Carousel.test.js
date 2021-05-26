import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it("renders without crashing", function() {
  render(<Carousel cardData='[
    {
      src: ./image1.jpg,
      caption: "Photo by Richard Pasquarella on Unsplash"
    },
    {
      src: ./image2.jpg,
      caption: "Photo by Pratik Patel on Unsplash"
    },
    {
      src: ./image3.jpg,
      caption: "Photo by Josh Post on Unsplash"
    }
  ]' title="Shells from far away beaches."/>)
});


it("works when you click on the right arrow", function() {
  const { container } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).toBeInTheDocument();

  expect(container).toMatchSnapshot();
});

it("works when you click on the left arrow", function() {
  const { container } = render(<Carousel />);

  // goes forward one image to reveal left arrow
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);
  
  // move backward in the carousel
  const leftArrow = container.querySelector(".fa-chevron-circle-left");
  fireEvent.click(leftArrow);

  // expect the last image to show, but not the first
  expect(
    container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="Photo by Josh Post on Unsplash"]')
    ).not.toBeInTheDocument();
});

it("successfully hides left arrow at beginning of array", function() {
  const { container } = render(<Carousel />);
  expect(
    container.querySelector('.fa-chevron-circle-left')
  ).not.toBeInTheDocument();

});

it("successfully hides right arrow at end of array", function() {
  const { container } = render(<Carousel />)

  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  expect(
    container.querySelector('.fa-chevron-circle-right')
  ).not.toBeInTheDocument();

});

// const { container } = render(<Carousel 
//   cardData={[
//     {
//       src: "./image1.jpg",
//       caption: "Photo by Richard Pasquarella on Unsplash"
//     }
//   ]} title="Shells from far away beaches." />)