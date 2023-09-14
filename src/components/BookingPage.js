

function BookingForm() {
    const formStyle = {
        display: "grid",
        maxWidth: "200px",
        gap: "20px"
    }
    return (
        <form style={formStyle}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date"></input>

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time ">
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests"></input>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
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
