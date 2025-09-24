import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SeatSelection({ bookingData, setBookingData }) {
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seats = Array.from({ length: 30 }, (_, i) => i + 1); // 30 seats

  const toggleSeat = (seat) => {
    setSelectedSeats(prev =>
      prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
    );
  };

  const handleNext = () => {
    if (!selectedSeats.length) return alert("Select at least 1 seat");
    setBookingData(prev => ({
      ...prev,
      seats: selectedSeats,
      total: prev.total + selectedSeats.length * 50, // 50 per seat
    }));
    navigate("/snacks");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Select Seats for {bookingData.movie?.title}</h2>
      <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "400px" }}>
        {seats.map(seat => (
          <div
            key={seat}
            onClick={() => toggleSeat(seat)}
            style={{
              width: "40px",
              height: "40px",
              margin: "5px",
              lineHeight: "40px",
              textAlign: "center",
              borderRadius: "6px",
              cursor: "pointer",
              backgroundColor: selectedSeats.includes(seat) ? "#1976d2" : "#eee",
              color: selectedSeats.includes(seat) ? "#fff" : "#000"
            }}
          >
            {seat}
          </div>
        ))}
      </div>
      <button onClick={handleNext} style={{ marginTop: "20px" }}>Next</button>
    </div>
  );
}
