import React from "react";
import TicketCard from "../components/TicketCard";

export default function Tickets({ tickets }) {
  if (!tickets.length) return <h2>No tickets booked yet</h2>;

  return (
    <div style={{ padding: "20px", display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {tickets.map(ticket => (
        <TicketCard key={ticket.id} booking={ticket} />
      ))}
    </div>
  );
}
