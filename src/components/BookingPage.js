import { useState } from "react";


function BookingForm() {
    const availableTimes = ["5:00pm", "6:00pm", "7:00pm", "8:00pm", "9:00pm", "10:00pm"]
    const availableOccasions = ["-", "Birthday", "Anniversary"]

    // State
    const [chosenDate, setChosenDate] = useState((new Date()).toISOString().split('T')[0]);
    const [chosenTime, setChosenTime] = useState(availableTimes[0]);
    const [numGuests, setNumGuests] = useState(4);
    const [occasion, setOccasion] = useState(availableOccasions[0]);

    return (
        <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
            <label htmlFor="res-date">Choose date</label>
            <input value={chosenDate} onChange={e => setChosenDate(e.target.value)}
                type="date" id="res-date"></input>

            <label htmlFor="res-time">Choose time</label>
            <select value={chosenTime} onChange={e => setChosenTime(e.target.value)} id="res-time ">
                {availableTimes.map(t => <option>{t}</option>)}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input value={numGuests} onChange={e => setNumGuests(e.target.value)}
                type="number" placeholder="1" min="1" max="10" id="guests"></input>

            <label htmlFor="occasion">Occasion</label>
            <select value={occasion} onChange={e => setOccasion(e.target.value)} id="occasion">
                {availableOccasions.map(t => <option>{t}</option>)}
            </select>
            <input type="submit" value="Make Your reservation"></input>
        </form>
    );
}

function BookingPage() {
    return (
        <div>
            <h1>Make a reservation</h1>
            <BookingForm></BookingForm>
        </div>
    );
}

export default BookingPage;
