import { useReducer } from "react";
import BookingPage from "./BookingPage";
import ComingSoonPage from "./ComingSoonPage";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";

// On weekends, show more time options!
const updateTimes = (state, action) => {
    const date = new Date(action);
    const dayOfWeek = date.getUTCDay();
    const isWeekendOrFriday = (dayOfWeek === 0 || dayOfWeek === 5 || dayOfWeek === 6);
    return isWeekendOrFriday ?
        ["5:00pm", "6:00pm", "7:00pm", "8:00pm", "9:00pm", "10:00pm", "11:00pm"] :
        ["6:00pm", "7:00pm", "8:00pm", "9:00pm"];
}

const initializeTimes = () => {
    return ["6:00pm", "7:00pm", "8:00pm", "9:00pm"];
};

function Main() {
    const initialTimes = updateTimes(null, (new Date()).toISOString().split('T')[0]);
    const [availableTimes, updateAvailableTimes] = useReducer(updateTimes, initialTimes);

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/home" element={<HomePage />}></Route>
                <Route path="/about" element={<ComingSoonPage />}></Route>
                <Route path="/menu" element={<ComingSoonPage />}></Route>
                <Route path="/reservations"
                    element={<BookingPage
                        availableTimes={availableTimes} updateAvailableTimes={updateAvailableTimes} />}></Route>
                <Route path="/order" element={<ComingSoonPage />}></Route>
                <Route path="/login" element={<ComingSoonPage />}></Route>
            </Routes>
        </main>
    );
}

export default Main;
// module.exports.updateTimes = updateTimes
// module.exports.initializeTimes = initializeTimes
