import { render, screen } from '@testing-library/react';
import App from '../App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("should find the element of the header", ()=> {
  render(<App />);
  const headingElement = screen.getByRole("heading", {name: "To - Do List"
  });
  expect(headingElement).toBeInTheDocument();
});

it("should have a h1 tag as the main header element", () => {
  render(<App />);
  const headingElementType = screen.getByText(/To - Do List/i);
  expect(headingElementType).toContainHTML("h1");
});