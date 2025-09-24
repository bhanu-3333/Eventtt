import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Movies from "./pages/Movies";
import NowShowing from "./pages/NowShowing";
import ComingSoon from "./pages/ComingSoon";
import Tickets from "./pages/Tickets";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MovieDetailPage from "./pages/MovieDetailPage";
import SeatSelection from "./pages/SeatSelection";
import SnackSelection from "./pages/SnackSelection";
import BookingSummary from "./pages/BookingSummary";
import Confirmation from "./pages/Confirmation";

export default function App() {
  const [bookingData, setBookingData] = useState({
    movie: null,
    seats: [],
    snacks: [],
    total: 0,
    theatre: "",
    showtime: "",
    id: null,
  });

  const [tickets, setTickets] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <>
      <Navbar user={user} />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<HomePage setBookingData={setBookingData} />} />
        <Route path="/movies" element={<Movies setBookingData={setBookingData} />} />
        <Route path="/now-showing" element={<NowShowing setBookingData={setBookingData} />} />
        <Route path="/coming-soon" element={<ComingSoon setBookingData={setBookingData} />} />
        <Route path="/tickets" element={<Tickets tickets={tickets} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />

        {/* Booking Flow */}
        <Route path="/movie/:id" element={<MovieDetailPage setBookingData={setBookingData} />} />
        <Route path="/seats" element={<SeatSelection bookingData={bookingData} setBookingData={setBookingData} />} />
        <Route path="/snacks" element={<SnackSelection bookingData={bookingData} setBookingData={setBookingData} />} />
        <Route path="/summary" element={
          <BookingSummary 
            bookingData={bookingData} 
            setBookingData={setBookingData} 
            tickets={tickets} 
            setTickets={setTickets} 
          />
        } />
        <Route path="/confirmation" element={<Confirmation bookingData={bookingData} />} />
      </Routes>
    </>
  );
}
