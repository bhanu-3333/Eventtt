import React from "react";
import MovieCard from "../components/MovieCard";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// Sample movies (new releases)
const newReleases = [
  { id: 1, title: "Avengers: Endgame", poster: "/poster1.jpg", theatre: "IMAX Theatre", showtime: "7:30 PM", price: 150 },
  { id: 2, title: "Spider-Man: No Way Home", poster: "/poster2.jpg", theatre: "PVR Cinemas", showtime: "6:00 PM", price: 120 },
  { id: 3, title: "The Batman", poster: "/poster3.jpg", theatre: "Cinepolis", showtime: "8:00 PM", price: 130 },
  { id: 4, title: "Guardians of the Galaxy 3", poster: "/poster4.jpg", theatre: "INOX", showtime: "9:00 PM", price: 140 },
  { id: 5, title: "Black Panther 2", poster: "/poster5.jpg", theatre: "PVR Cinemas", showtime: "7:00 PM", price: 150 },
];

export default function HomePage() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>New Releases</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {newReleases.map(movie => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
