import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
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
    id: Date.now()
  });

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/seats" element={<SeatSelection bookingData={bookingData} setBookingData={setBookingData} />} />
        <Route path="/snacks" element={<SnackSelection bookingData={bookingData} setBookingData={setBookingData} />} />
        <Route path="/summary" element={<BookingSummary bookingData={bookingData} setBookingData={setBookingData} />} />
        <Route path="/confirmation" element={<Confirmation bookingData={bookingData} />} />
      </Routes>
    </>
  );
}
