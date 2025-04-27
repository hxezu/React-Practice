import { useEffect, useState } from "react";
import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import MovieMain from "./MovieMain";
import { movieInstance } from "../../../api/axiosInstance";

export default function Movie() {
  const [nowPlaying, setNowPlaying] = useState<MovieType[]>([]);
  const [upComing, setUpComing] = useState<MovieType[]>([]);
  const [popular, setPopular] = useState<MovieType[]>([]);

  const fetchNowPlaying = async () => {
    const result = await movieInstance.get("/movie/now_playing");
    setNowPlaying(result.data.results);
  };

  const fetchUpComingPlaying = async () => {
    const result = await movieInstance.get("/movie/upcoming");
    setUpComing(result.data.results);
  };

  const fetchPopular = async () => {
    const result = await movieInstance.get("/movie/popular");
    setPopular(result.data.results);
  };

  useEffect(() => {
    fetchNowPlaying();
    fetchUpComingPlaying();
    fetchPopular();
  }, []);
  return (
    <>
      <MovieHeader />
      <MovieMain />
      <MovieList movies={nowPlaying} title="Now Playing" />
      <MovieList movies={upComing} title="Upcoming" />
      <MovieList movies={popular} title="Popular" />
    </>
  );
}
