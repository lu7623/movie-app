export interface MovieResponse {
  docs: MovieInfo[],
  total: number,
  limit: number,
  page: number,
  pages: number
}

export interface MovieResults {
  films: MovieInfo[],
  max: number
}

export type MovieInfo = {
  id: number,
  name: string,
  year: number,
  rating: {
    kp: number,
  },
  poster: {
    url: string,
    previewUrl: string
  },
  genres: Genre[],
}

export type SimilarMovies = {
  id: number,
  name: string,
  year: number,
  rating: {
    kp: number,
  },
  poster: {
    url: string,
  },
}

type Genre = {
  name: string
}
type Country = {
  name: string
}

type Person = {
  id: number,
  name: string,
  profession: string
}

export type DetailedMovieInfo = {
  id: number,
  name: string,
  year?: number,
  description: string,
  rating: {
    kp: number,
  },
  poster: {
    url: string,
    previewUrl: string
  },
  movieLength?: number,
  ageRating?: number,
  lists: string[],
  genres: Genre[],
  countries?: Country[],
  persons: Person[],
  similarMovies?: SimilarMovies[]
}