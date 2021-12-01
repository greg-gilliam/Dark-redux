import { screen, render } from "@testing-library/react";
import Picker from "./Picker";

it("should render the Picker component", () => {
  const { container } = render(<Picker />);
  const selectHead = screen.getByLabelText(/Head/);
  const selectBody = screen.getByLabelText(/Body/);
  const selectAccessory = screen.getByLabelText(/Accessorize!/);
  const input = screen.getByLabelText(/Add a catchphrase:/);

  expect(selectHead).toBeInTheDocument();
  expect(selectBody).toBeInTheDocument();
  expect(selectAccessory).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
