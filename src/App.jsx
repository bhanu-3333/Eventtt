import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import SeatSelection from './pages/SeatSelection';
import BookingSummary from './pages/BookingSummary';
import Confirmation from './pages/Confirmation';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/seat-selection/:id/:showtime" element={<SeatSelection />} />
        <Route path="/summary/:id/:showtime" element={<BookingSummary />} />
        <Route path="/confirmation/:bookingId" element={<Confirmation />} />
      </Routes>
    </>
  );
}

export default App;
