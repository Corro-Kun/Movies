import { DataMovies } from "./data-movies.dto";
import { VideoMovies } from "./video-movies.dto";

export interface ResponseMovies {
    page: number;
    results: DataMovies[];
}

export interface ResponseVideos{
    id: number;
    results: VideoMovies[];
}