import { useState } from "react";


function BookingForm(props) {
    const availableOccasions = ["-", "Birthday", "Anniversary"]

    // State
    const [chosenDate, setChosenDate] = useState((new Date()).toISOString().split('T')[0]);
    const [chosenTime, setChosenTime] = useState(props.availableTimes[0]);
    const [numGuests, setNumGuests] = useState(4);
    const [occasion, setOccasion] = useState(availableOccasions[0]);

    const handleDateChange = (e) => {
        setChosenDate(e.target.value);
        props.updateAvailableTimes(e.target.value);
    };

    return (
        <form aria-label="Make a reservation" style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
            <label htmlFor="res-date">Choose date</label>
            <input value={chosenDate} onChange={handleDateChange}
                type="date" id="res-date"></input>

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

function BookingPage(props) {
    return (
        <div>
            <h1>Make a reservation</h1>
            <BookingForm
                availableTimes={props.availableTimes}
                updateAvailableTimes={props.updateAvailableTimes} />
        </div>
    );
}

export default BookingPage;
