import React from "react";
import "../styles/SnackSelection.css";

export default function SnackCard({ snack, isSelected, toggleSnack }) {
  return (
    <div
      className={`snack-card ${isSelected ? "selected" : ""}`}
      onClick={() => toggleSnack(snack)}
    >
      <h3>{snack.name}</h3>
      <p>₹{snack.price}</p>
    </div>
  );
}
