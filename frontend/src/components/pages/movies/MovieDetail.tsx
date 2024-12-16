import style from '@/styles/components/pages/movies/movieDetail.module.css';
import Back from "@/components/ui/Back";
import Percentage from "@/components/shared/Percentage";
import Tag from "@/components/shared/Tag";
import WatchTrailer from "./WatchTrailer";
import { Suspense } from "react";
import Loader from "@/components/ui/Loader";
import { DetailMovie } from "@/types/movies";
import Heart from '@/components/shared/Heart';


export default async function MovieDetail({movie}: {movie: DetailMovie}) {
    return(
        <div className={style.main} >
            <img className={style.banner} src={'https://image.tmdb.org/t/p/original'+movie?.backdrop_path} alt={`${movie?.title} backdrop`} />
            <div className={style.blur} />
            <div className={style.header} >
                <Back />
            </div>
            <div  className={style.content} >
                <div className={style.card} >
                    <picture className={style.poster} >
                        <img src={'https://image.tmdb.org/t/p/w500'+movie?.poster_path} alt={`${movie?.title} poster`} />
                    </picture>
                    <Suspense fallback={<Loader />} >
                        <WatchTrailer id={movie?.id} />
                    </Suspense>
                </div>
                <div  className={style.detail} >
                    <h1>{movie?.title}</h1>
                    <div>
                        <span>{movie?.release_date}</span>
                    </div>
                    <h2>Overview:</h2>
                    <div className={style.overview} >
                        <p>{movie?.overview}</p>
                    </div>
                    <div className={style.action} >
                        <div className={style.score} >
                            <Percentage percentage={movie?.vote_average} type="banner" />
                            <div>
                                <p>Users</p>
                                <p>Score</p>
                            </div>
                        </div>
                        <Heart movie={movie} />
                    </div>
                    <div className={style.tags} >
                        {movie?.genres.map((genre, index) => (
                            <Tag key={index} genre={genre} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}