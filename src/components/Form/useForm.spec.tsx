import { renderHook, act } from "@testing-library/react";
import { useForms } from "./useForm";
import { fetchData } from "../../services/request";

// Mock the fetchData function
jest.mock("../../services/request", () => ({
  fetchData: jest.fn(),
}));

describe("useForms", () => {
  test("should handle form submit and fetch data", async () => {
    // Render the hook
    const { result } = renderHook(() => useForms());

    // Simulate form submission
    act(() => {
      result.current.handleFormSubmit({
        form: {
          zipCode: "12345",
          billValue: "100",
          structureTypes: "abc",
        },
      });
    });

    // Assert that the fetchData function was called with the correct arguments
    expect(fetchData).toHaveBeenCalledWith("12345", "abc", "100");
  });
});
