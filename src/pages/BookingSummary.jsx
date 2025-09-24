import React from "react";
import { useNavigate } from "react-router-dom";

export default function BookingSummary({ bookingData, tickets, setTickets }) {
  const navigate = useNavigate();

  if (!bookingData.movie) return <h2>No booking data available</h2>;

  const handleConfirm = () => {
    setTickets([...tickets, bookingData]); // save booked ticket
    navigate("/confirmation");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Booking Summary</h2>
      <p><b>Movie:</b> {bookingData.movie.title}</p>
      <p><b>Theatre:</b> {bookingData.theatre}</p>
      <p><b>Showtime:</b> {bookingData.showtime}</p>
      <p><b>Seats:</b> {bookingData.seats.join(", ")}</p>
      <p><b>Snacks:</b> {bookingData.snacks.map(s => s.name).join(", ") || "None"}</p>
      <p><b>Total:</b> ₹{bookingData.total}</p>
      <button onClick={handleConfirm}>Confirm Booking</button>
    </div>
  );
}
