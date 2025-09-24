import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const snackOptions = [
  { id: 1, name: "Popcorn", price: 50 },
  { id: 2, name: "Coke", price: 30 },
  { id: 3, name: "Nachos", price: 60 }
];

export default function SnackSelection({ bookingData, setBookingData }) {
  const [selectedSnacks, setSelectedSnacks] = useState([]);
  const navigate = useNavigate();

  const toggleSnack = (snack) => {
    setSelectedSnacks(prev =>
      prev.includes(snack) ? prev.filter(s => s !== snack) : [...prev, snack]
    );
  };

  const handleNext = () => {
    setBookingData(prev => ({
      ...prev,
      snacks: selectedSnacks,
      total: prev.total + selectedSnacks.reduce((sum, s) => sum + s.price, 0)
    }));
    navigate("/summary");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Select Snacks</h2>
      {snackOptions.map(snack => (
        <div key={snack.id} style={{ margin: "10px 0" }}>
          <input
            type="checkbox"
            checked={selectedSnacks.includes(snack)}
            onChange={() => toggleSnack(snack)}
          />
          {snack.name} - ₹{snack.price}
        </div>
      ))}
      <button onClick={handleNext} style={{ marginTop: "20px" }}>Next</button>
    </div>
  );
}
