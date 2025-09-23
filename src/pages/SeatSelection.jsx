import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SeatGrid from '../components/SeatGrid';

const generateSeatsForShow = (rows = 6, cols = 8, bookedRatio = 0.15) => {
  const seatRows = [];
  let idCounter = 1;
  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 1; c <= cols; c++) {
      const label = `${String.fromCharCode(65 + r)}${c}`;
      const isBooked = Math.random() < bookedRatio;
      row.push({ id: idCounter++, label, status: isBooked ? 'booked' : 'available' });
    }
    seatRows.push(row);
  }
  return { rows: seatRows };
};

export default function SeatSelection(){
  const { id, showtime } = useParams();
  const navigate = useNavigate();
  const decodedTime = decodeURIComponent(showtime);
  // generate seat map once per movie+showtime
  const initial = useMemo(() => generateSeatsForShow(6, 8, 0.18), [id, decodedTime]);

  const [seats, setSeats] = useState(initial);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    // reset on id/showtime change
    setSeats(initial);
    setSelected([]);
  }, [initial, id, decodedTime]);

  const toggleSeat = (seatId) => {
    const newRows = seats.rows.map(row =>
      row.map(s => s.id === seatId ? ({ ...s, status: s.status === 'selected' ? 'available' : 'selected' }) : s)
    );
    setSeats({ rows: newRows });

    // update selected ids and labels
    const flat = newRows.flat();
    const selectedNow = flat.filter(s => s.status === 'selected').map(s => s.label);
    setSelected(selectedNow);
  };

  const proceed = () => {
    if (selected.length === 0) {
      alert('Select at least one seat.');
      return;
    }
    // store booking interim info
    const bookingTemp = {
      movieId: id,
      showtime: decodedTime,
      seats: selected
    };
    localStorage.setItem('movieBookingTemp', JSON.stringify(bookingTemp));
    navigate(`/summary/${id}/${encodeURIComponent(decodedTime)}`);
  };

  return (
    <div className="container" style={{ paddingBottom:40 }}>
      <div style={{ maxWidth:900, margin:'12px auto', textAlign:'center' }}>
        <h2>Pick Your Seats — {decodedTime}</h2>
        <div className="screen">SCREEN</div>
        <SeatGrid seats={seats} toggleSeat={toggleSeat} />
        <div style={{ marginTop: 12 }}>
          <div className="legend">
            <div className="item"><div className="box avail"></div> Available</div>
            <div className="item"><div className="box sel"></div> Selected</div>
            <div className="item"><div className="box book"></div> Booked</div>
          </div>
        </div>

        <p style={{ marginTop:14, fontWeight:700 }}>Selected: {selected.join(', ') || 'None'}</p>
        <div style={{ marginTop:12 }}>
          <button onClick={proceed} className="primary">Continue to Summary</button>
        </div>
      </div>
    </div>
  );
}
