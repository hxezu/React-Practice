import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import MovieMain from "./MovieMain";
import { movieInstance } from "../../../api/axiosInstance";
import { Suspense } from "react";
import MovieLoader from "./MovieLoader";
import { ErrorBoundary } from "react-error-boundary";
import MovieError from "./MovieError";

const fetchMovie = async (url: string) => {
  await new Promise((resolve) =>
    setTimeout(
      resolve,
      [3000, 4000, 5000, 6000, 7000][Math.floor(Math.random() * 5)]
    )
  );
  const result = await movieInstance.get(url);
  return result.data.results;
};

// ErrorBoundary : 렌더링 중에 발생하는 오류를 핸들링하기 위해 사용하는 패턴
// 전통적으로 클래스 컴포넌트로 작성되어야 함
export default function Movie() {
  return (
    <>
      <MovieHeader />
      <MovieMain />
      <ErrorBoundary fallback={<MovieError title="Now Playing" />}>
        <Suspense fallback={<MovieLoader title="Now Playing" />}>
          <MovieList
            fetchPromise={fetchMovie("/movie/now_playing23")}
            title="Now Playing"
          />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<MovieError title="Upcoming" />}>
        <Suspense fallback={<MovieLoader title="Upcoming" />}>
          <MovieList
            fetchPromise={fetchMovie("/movie/upcoming")}
            title="Upcoming"
          />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<MovieError title="Popular" />}>
        <Suspense fallback={<MovieLoader title="Popular" />}>
          <MovieList
            fetchPromise={fetchMovie("/movie/popular")}
            title="Popular"
          />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
