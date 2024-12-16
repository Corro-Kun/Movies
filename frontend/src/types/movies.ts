export interface Movie {
    id: number;
    title: string;
    vote_average: number;
    release_date: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
}

export interface AllMovies {
    popular: Movie[];
    nowPlaying: Movie[];
    topRated: Movie[];
    coming: Movie[];
}

export interface GenreMovies {
    id: number;
    name: string;
}

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

export interface Trailer{
    id: string;
    key: string;
    name: string;
    site: string;
    type: string;
}