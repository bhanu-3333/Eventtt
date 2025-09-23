import React from "react";
import MovieCard from "../components/MovieCard";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Autoplay, Pagination]);


const newReleases = [
  { id: 1, title: "Avengers: Endgame", poster: "/poster1.jpg", theatre: "IMAX Theatre", showtime: "7:30 PM", price: 150, rating: 4.7 },
  { id: 2, title: "Spider-Man: No Way Home", poster: "/poster2.jpg", theatre: "PVR Cinemas", showtime: "6:00 PM", price: 120, rating: 4.5 },
  { id: 3, title: "The Batman", poster: "/poster3.jpg", theatre: "Cinepolis", showtime: "8:00 PM", price: 130, rating: 4.6 },
  { id: 4, title: "Guardians of the Galaxy 3", poster: "/poster4.jpg", theatre: "INOX", showtime: "9:00 PM", price: 140, rating: 4.4 },
  { id: 5, title: "Black Panther 2", poster: "/poster5.jpg", theatre: "PVR Cinemas", showtime: "7:00 PM", price: 150, rating: 4.8 },
];

const trendingMovies = [
  { id: 6, title: "Doctor Strange 2", poster: "/poster6.jpg", theatre: "Cinepolis", showtime: "6:30 PM", price: 135, rating: 4.5 },
  { id: 7, title: "Thor: Love & Thunder", poster: "/poster7.jpg", theatre: "PVR Cinemas", showtime: "7:30 PM", price: 140, rating: 4.3 },
  { id: 8, title: "Shang-Chi", poster: "/poster8.jpg", theatre: "INOX", showtime: "8:00 PM", price: 125, rating: 4.6 },
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
        {newReleases.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} badge="New" />
          </SwiperSlide>
        ))}
      </Swiper>

      <h2 style={{ marginTop: "40px" }}>Trending Movies</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {trendingMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} badge="Trending" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
