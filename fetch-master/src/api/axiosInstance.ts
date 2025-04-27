import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const axiosLocalInstance = axios.create({
  baseURL: "http://localhost:3001",
});

export const movieInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGEwNmQ0ZjVkZmJkNjQ3NTMzYjY0Yzk2YzY4NTIxNiIsIm5iZiI6MTc0NTQ2MzA0MC4wNzQsInN1YiI6IjY4MDlhNzAwYzVjODAzNWZiMDhhZjgwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YuEOVpGoYoJtZH3uNmll65p-xpsyGDvHmsV3LY75ito",
  },
});
