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


// describe("Reducer functions working", () => {
//   const { updateTimes, initializeTimes } = require('./components/Main.js');

//   test('Reducer gives limited times on weekdays', () => {
//     const expected = ["6:00pm", "7:00pm", "8:00pm", "9:00pm"];
//     expect(updateTimes(0, "2023-09-14")).toEqual(expected);
//   });

//   test('Reducer gives extended times on Friday', () => {
//     const expected = ["5:00pm", "6:00pm", "7:00pm", "8:00pm", "9:00pm", "10:00pm", "11:00pm"];
//     expect(updateTimes(0, "2023-09-15")).toEqual(expected);
//   });

//   test('Initial times shows times', () => {
//     const expected = ["6:00pm", "7:00pm", "8:00pm", "9:00pm"];
//     expect(initializeTimes()).toEqual(expected);
//   });
// });