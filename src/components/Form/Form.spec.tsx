import { render, screen, fireEvent } from "@testing-library/react";
import FormStep from "./Form";

describe("FormStep", () => {
  test("submits the form when button is clicked", () => {
    render(<FormStep />);

    // Fill in the form fields
    const cepInput = screen.getByPlaceholderText("CEP");
    fireEvent.change(cepInput, { target: { value: "123456789" } });

    const billValueInput = screen.getByPlaceholderText("Valor da conta");
    fireEvent.change(billValueInput, { target: { value: "100" } });

    const submitButton = screen.getByText("Enviar");
    fireEvent.click(submitButton);
  });
});
