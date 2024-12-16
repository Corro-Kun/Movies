import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';

@Module({
  imports: [CacheModule.register()],
  providers: [MoviesService],
  controllers: [MoviesController]
})
export class MoviesModule {}
