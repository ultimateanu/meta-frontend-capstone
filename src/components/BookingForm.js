import { useState } from "react";

function BookingForm(props) {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const todayDate = `${year}-${month}-${day}`;
    const availableOccasions = ["-", "Birthday", "Anniversary"]

    // State
    const [chosenDate, setChosenDate] = useState(todayDate);
    const [chosenTime, setChosenTime] = useState(props.availableTimes[0]);
    const [numGuests, setNumGuests] = useState(4);
    const [occasion, setOccasion] = useState(availableOccasions[0]);

    const handleDateChange = (e) => {
        e.preventDefault();
        setChosenDate(e.target.value);
        props.updateAvailableTimes(e.target.value);
    };

    return (
        <form aria-label="Make a reservation" style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
            <label htmlFor="res-date">Choose date</label>
            <input value={chosenDate} onChange={handleDateChange}
                type="date" min={todayDate} id="res-date"></input>

            <label htmlFor="res-time">Choose time</label>
            <select value={chosenTime} onChange={e => setChosenTime(e.target.value)} id="res-time ">
                {props.availableTimes.map(t => <option key={t}>{t}</option>)}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input value={numGuests} onChange={e => setNumGuests(e.target.value)}
                type="number" placeholder="1" min="1" max="10" id="guests"></input>

            <label htmlFor="occasion">Occasion</label>
            <select value={occasion} onChange={e => setOccasion(e.target.value)} id="occasion">
                {availableOccasions.map(t => <option key={t}>{t}</option>)}
            </select>
            <input type="submit" value="Make Your reservation"></input>
        </form>
    );
}

export default BookingForm;
