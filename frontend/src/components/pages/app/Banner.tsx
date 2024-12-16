import style from '@/styles/components/pages/app/banner.module.css';
import Percentage from '@/components/shared/Percentage';
import { Movie } from '@/types/movies';
import Heart from '../../shared/Heart';

export default function Banner({movie}: {movie: Movie}) {
  return (
     <div className={style.box} >
      <img className={style.banner} src={"https://image.tmdb.org/t/p/original"+ movie.backdrop_path} alt={movie.title} />
      <div className={style.blur} />
      <div className={style.bottom} >
        <div className={style.information} >
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
        <div className={style.interaction} >
          <Heart movie={movie} />
          <Percentage type='banner' percentage={movie.vote_average} />
        </div>
      </div>
     </div>
  );
}