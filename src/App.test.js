import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';


describe("Booking form labels present", () => {
  test('Renders date label for BookingForm', () => {
    render(<BookingForm availableTimes={["5pm", "6pm"]} />);
    const dateLabel = screen.getByText("Choose date");
    expect(dateLabel).toBeInTheDocument();
  });

  test('Renders time label for BookingForm', () => {
    render(<BookingForm availableTimes={["5pm", "6pm"]} />);
    const timeLabel = screen.getByText("Choose time");
    expect(timeLabel).toBeInTheDocument();
  });

  test('Renders guests label for BookingForm', () => {
    render(<BookingForm availableTimes={["5pm", "6pm"]} />);
    const label = screen.getByText("Number of guests");
    expect(label).toBeInTheDocument();
  });

  test('Renders occasion label for BookingForm', () => {
    render(<BookingForm availableTimes={["5pm", "6pm"]} />);
    const label = screen.getByText("Occasion");
    expect(label).toBeInTheDocument();
  });
});
