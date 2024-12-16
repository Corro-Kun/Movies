import { paths } from '@/config/paths';
import style from '@/styles/components/pages/movies/recommendations.module.css';
import { getRecommendations } from '@/utils/movies.api';
import Link from 'next/link';

export default async function Recommendations({id}: {id: number}) {
    let movies = await getRecommendations(id);
    if (movies?.length === 0 || !movies) {
        return null;
    }
    movies = movies.slice(0, 5);
    return (
        <div className={style.main} >
            <h1>Recommendations</h1>
            <div className={style.movies} >
                {movies?.map((movie) => (
                    <Link href={paths.movie.getHref(movie.id)} className={style.movie} key={movie.id} >
                        <picture>
                            <img src={'https://image.tmdb.org/t/p/w300'+movie.poster_path} alt={movie.title} />
                        </picture>
                        <div>
                            <p>{movie.title}</p>   
                        </div>
                    </Link>
                ))}
           </div>
        </div>
    );
}