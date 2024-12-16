import { GenreMovies } from "./genre-movies.dto";

export interface DetailMovie {
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    vote_average: number;
    genres: GenreMovies[];
};