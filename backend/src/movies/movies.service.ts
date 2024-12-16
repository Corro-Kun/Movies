import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cache } from 'cache-manager';
import { ResponseMovies, ResponseVideos } from './dto/response-movies.dto';
import { DataMovies } from './dto/data-movies.dto';
import { DetailMovie } from './dto/detail-movies.dto';
import { VideoMovies } from './dto/video-movies.dto';

@Injectable()
export class MoviesService {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache, private configService: ConfigService) {}

    async getBanner(){
        try {
            const value:DataMovies = await this.cacheManager.get('banner');

            if(value){
                return value;
            }

            const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',{
                headers: {
                    Authorization: `Bearer ${this.configService.get('API_KEY')}`
                }
            });

            const data: ResponseMovies = await response.json();

            const result: DataMovies = data.results[Math.floor(Math.random() * data.results.length)];

            this.cacheManager.set('banner', result, 3600000);

            return result;
        } catch (error) {
            throw error;
        }
    }

    async getMovies(){
        try {
            const value:DataMovies[] = await this.cacheManager.get('movies');

            if(value){
                return value;
            }

            const resPopular = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',{
                headers: {
                    Authorization: `Bearer ${this.configService.get('API_KEY')}`
                }
            });

            const datPopular: ResponseMovies = await resPopular.json();

            const resNowPlaying = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2',{
                headers: {
                    Authorization: `Bearer ${this.configService.get('API_KEY')}`
                }
            });

            const datNowPlaying: ResponseMovies = await resNowPlaying.json();

            const resTopRated = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',{
                headers: {
                    Authorization: `Bearer ${this.configService.get('API_KEY')}`
                }
            });

            const datTopRated: ResponseMovies = await resTopRated.json();

            const resComing = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',{
                headers: {
                    Authorization: `Bearer ${this.configService.get('API_KEY')}`
                }
            })

            const datComing: ResponseMovies = await resComing.json();

            const result = {
                popular: datPopular.results,
                nowPlaying: datNowPlaying.results,
                topRated: datTopRated.results,
                coming: datComing.results
            }

            this.cacheManager.set('movies', result, 3600000);

            return result;
        } catch (error) {
            throw error;
        }
    }

    async getMovieById(id: number){
        try {
            const value:DetailMovie = await this.cacheManager.get(`movie-${id}`);

            if(value){
                return value;
            }

            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,{
                headers: {
                    Authorization: `Bearer ${this.configService.get('API_KEY')}`
                }
            });

            if (response.status === 404) {
                throw new HttpException('movie not found', HttpStatus.NOT_FOUND);
            }

            const data: DetailMovie = await response.json();

            this.cacheManager.set(`movie-${id}`, data, 600000);

            return data;
        } catch (error) {
            throw error;
        }
    }

    async getMovieTrailer(id: number){
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,{
                headers: {
                    Authorization: `Bearer ${this.configService.get('API_KEY')}`
                }
            });

            if (response.status === 404) {
                throw new HttpException('trailer not found', HttpStatus.NOT_FOUND);
            }

            const data: ResponseVideos = await response.json();

            if (data.results.length === 0) {
                throw new HttpException('trailer not found', HttpStatus.NOT_FOUND);
            }

            const trailer: VideoMovies[] = data.results.filter((video) => video.type === 'Trailer');

            if (trailer.length === 0) {
                throw new HttpException('trailer not found', HttpStatus.NOT_FOUND);
            }

            return trailer[trailer.length - 1];
            
        } catch (error) {
            throw error; 
        }
    }

    async getRecommendations(id: number){
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,{
                headers: {
                    Authorization: `Bearer ${this.configService.get('API_KEY')}`
                }
            });

            if (response.status === 404) {
                throw new HttpException('recommendations not found', HttpStatus.NOT_FOUND);
            }

            const data: ResponseMovies = await response.json();

            return data.results;
        } catch (error) {
            throw error;            
        }
    }

    async byGenre(genre: number){
        try {
            const value:DataMovies[] = await this.cacheManager.get(`genre-${genre}`);

            if(value){
                return value;
            }

            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}`,{
                headers: {
                    Authorization: `Bearer ${this.configService.get('API_KEY')}`
                }
            });

            const data: ResponseMovies = await response.json();

            this.cacheManager.set(`genre-${genre}`, data.results, 3600000);

            return data.results;
        } catch (error) {
            throw error;
        }
    }

    async searchMovie(query: string){
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?language=en-US&query=${query}&page=1&include_adult=false`,{
                headers: {
                    Authorization: `Bearer ${this.configService.get('API_KEY')}`
                }
            });

            const data: ResponseMovies = await response.json();

            return data.results;
        } catch (error) {
            throw error;
        }
    }
}
