import { useState } from "react";
import BookingPage from "./BookingPage";
import ComingSoonPage from "./ComingSoonPage";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";


function Main() {
    // State
    const [availableTimes, setAvailableTimes] = useState(["5:00pm", "6:00pm", "7:00pm", "8:00pm", "9:00pm", "10:00pm"]);

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/home" element={<HomePage />}></Route>
                <Route path="/about" element={<ComingSoonPage />}></Route>
                <Route path="/menu" element={<ComingSoonPage />}></Route>
                <Route path="/reservations"
                    element={<BookingPage
                        availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />}></Route>
                <Route path="/order" element={<ComingSoonPage />}></Route>
                <Route path="/login" element={<ComingSoonPage />}></Route>
            </Routes>
        </main>
    );
}

export default Main;
