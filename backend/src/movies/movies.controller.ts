import { Controller, Get, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private moviesService: MoviesService) {}

    @Get('/banner')
    async getBanner() {
        return await this.moviesService.getBanner();
    }

    @Get('/all')
    async getMovies() {
        return await this.moviesService.getMovies();
    }

    @Get('/:id')
    async getMovie(@Param('id') id: number) {
        return await this.moviesService.getMovieById(id);
    }

    @Get('/trailer/:id')
    async getTrailer(@Param('id') id: number) {
        return await this.moviesService.getMovieTrailer(id);
    }

    @Get('/recommendations/:id')
    async getRecommendations(@Param('id') id: number) {
        return await this.moviesService.getRecommendations(id);
    }

    @Get('/genre/:id')
    async getByGenre(@Param('id') id: number) {
        return await this.moviesService.byGenre(id);
    }

    @Get('/search/:query')
    async search(@Param('query') query: string) {
        return await this.moviesService.searchMovie(query);
    }
}
