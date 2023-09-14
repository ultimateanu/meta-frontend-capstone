import BookingPage from "./BookingPage";
import ComingSoonPage from "./ComingSoonPage";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";


function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/home" element={<HomePage />}></Route>
                <Route path="/about" element={<ComingSoonPage />}></Route>
                <Route path="/menu" element={<ComingSoonPage />}></Route>
                <Route path="/reservations" element={<BookingPage />}></Route>
                <Route path="/order" element={<ComingSoonPage />}></Route>
                <Route path="/login" element={<ComingSoonPage />}></Route>
            </Routes>
        </main>
    );
}

export default Main;
