import BookingPage from "./BookingPage";
import HomePage from "./HomePage";
// import { Routes, Route } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";


function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/home" element={<HomePage />}></Route>
                <Route path="/reservations" element={<BookingPage />}></Route>
            </Routes>
        </main>
    );
}

export default Main;
