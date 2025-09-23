import React from "react";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";

export default function Confirmation({ bookingData }) {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign:'center', marginTop:40 }}>
      <h2>Booking Confirmed!</h2>
      <div style={{ display:'inline-block', padding:20, border:'1px solid #ccc', borderRadius:12, background:'#fff' }}>
        <h3>{bookingData.movie}</h3>
        <p>{bookingData.theatre} • {bookingData.showtime}</p>
        <p>Seats: {bookingData.seats.join(", ")}</p>
        <p>Snacks: {bookingData.snacks.map(s => s.name).join(", ") || "None"}</p>
        <h3>Total: ₹{bookingData.total}</h3>
        <QRCode value={JSON.stringify(bookingData)} size={150} />
      </div>
      <br/>
      <button style={{ marginTop:20 }} onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}
