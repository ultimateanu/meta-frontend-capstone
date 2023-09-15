import BookingForm from "./BookingForm";

function BookingPage(props) {
    return (
        <div>
            <h1 style={{ marginTop: '4rem' }}>Make a reservation</h1>
            <BookingForm
                availableTimes={props.availableTimes}
                updateAvailableTimes={props.updateAvailableTimes} />
        </div>
    );
}

export default BookingPage;
