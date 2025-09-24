import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Autoplay, Pagination]);

export default function HomePage({ setBookingData }) {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); // for navigation

  const API_KEY ="273ace99747d2e6de9128068acf00f79";

  // Fetch Now Playing movies initially
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results || []));
  }, []);

  // Search movies when typing
  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results || []));
  };

  // Handle Book Now button
  const handleBookNow = (movie) => {
    setBookingData({
      movie,
      theatre: "Cinema Hall 1",   // default theatre
      showtime: "10:00 AM",      // default showtime
      seats: [],
      snacks: [],
      total: 0,
      id: Date.now(),
    });
    navigate("/seats"); // navigate to seat selection page
  };

  return (
    <div className="home-container" style={{ padding: "20px" }}>
      <h1>🎬 Now Showing</h1>

      {/* Search Bar */}
      <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            fontSize: "16px",
            marginRight: "10px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 15px",
            backgroundColor: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>

      {/* Auto-slide movies */}
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard 
              movie={movie} 
              onBookNow={() => handleBookNow(movie)} // pass the handler
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
