import { render, screen, fireEvent } from "@testing-library/react";
import AppointmentPage from "../pages/AppointmentPage";

describe("AppointmentPage", () => {
  it("renders form and submits", async () => {
    render(<AppointmentPage />);
    const name = screen.getByLabelText(/Patient Name/i);
    const email = screen.getByLabelText(/Email/i);
    const date = screen.getByLabelText(/Date/i);
    const time = screen.getByLabelText(/Time/i);
    const submit = screen.getByText(/Book Appointment/i);

    fireEvent.change(name, { target: { value: "Test User" } });
    fireEvent.change(email, { target: { value: "test@example.com" } });
    fireEvent.change(date, { target: { value: "2026-06-15" } });
    fireEvent.change(time, { target: { value: "10:00" } });
    fireEvent.click(submit);

    expect(
      await screen.findByText(/Appointment requested/i),
    ).toBeInTheDocument();
  });
});
