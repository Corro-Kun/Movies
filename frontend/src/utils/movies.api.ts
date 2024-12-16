import { Movie, AllMovies, DetailMovie, Trailer } from "@/types/movies";

export async function getBanner(){
    const res = await fetch('http://localhost:4000/api/movies/banner',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const data:Movie = await res.json();
    return data;       
};

export async function getMovies(){
    const res = await fetch('http://localhost:4000/api/movies/all',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const data:AllMovies = await res.json();
    return data;       
}

export async function getMovie(id: number){
    const res = await fetch(`http://localhost:4000/api/movies/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if(res.status === 404){
        return null;
    }
    const data:DetailMovie = await res.json();
    return data;       
}

export async function getTrailer(id: number){
    const res = await fetch(`http://localhost:4000/api/movies/trailer/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if(res.status === 404){
        return null;
    }
    const data: Trailer = await res.json();
    return data;       
}

export async function getRecommendations(id: number){
    const res = await fetch(`http://localhost:4000/api/movies/recommendations/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if(res.status === 404){
        return null;
    }
    const data: Movie[] = await res.json();
    return data;       
}

export async function getByGenre(id: number){
    const res = await fetch(`http://localhost:4000/api/movies/genre/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if(res.status === 404){
        return null;
    }
    const data: Movie[] = await res.json();
    return data;       
}

export async function searchMovie(query: string){
    const res = await fetch(`http://localhost:4000/api/movies/search/${query}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const data: Movie[] = await res.json();
    return data;       
}