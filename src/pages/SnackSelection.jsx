import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SnackCard from "../components/SnackCard";

const snackMenu = [
  { id: 1, name: "Popcorn", price: 50 },
  { id: 2, name: "Soda", price: 30 },
  { id: 3, name: "Nachos", price: 70 },
  { id: 4, name: "Combo", price: 120 },
];

export default function SnackSelection({ bookingData, setBookingData }) {
  const navigate = useNavigate();
  const [selectedSnacks, setSelectedSnacks] = useState([]);

  const toggleSnack = (snack) => {
    const exists = selectedSnacks.find(s => s.id === snack.id);
    let newSelection = [];
    if (exists) {
      newSelection = selectedSnacks.filter(s => s.id !== snack.id);
    } else {
      newSelection = [...selectedSnacks, snack];
    }
    setSelectedSnacks(newSelection);

    const snacksTotal = newSelection.reduce((acc, s) => acc + s.price, 0);
    const seatsTotal = bookingData.seats.length * (bookingData.total / bookingData.seats.length || 0);

    setBookingData({ ...bookingData, snacks: newSelection, total: seatsTotal + snacksTotal });
  };

  return (
    <div className="snack-selection">
      <h2>Select Snacks</h2>
      <div className="snack-grid">
        {snackMenu.map(snack => (
          <SnackCard
            key={snack.id}
            snack={snack}
            isSelected={selectedSnacks.includes(snack)}
            toggleSnack={toggleSnack}
          />
        ))}
      </div>
      <button className="next-btn" onClick={() => navigate("/summary")}>Next: Summary</button>
    </div>
  );
}
