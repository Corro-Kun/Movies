import style from '@/styles/components/pages/movies/watchTrailer.module.css';
import { getTrailer } from '@/utils/movies.api';
import Image from 'next/image';

export default async function WatchTrailer({id}: {id: number}) {
    const trailer = await getTrailer(id);

    if(!trailer){
        return null;
    }

    return (
        <a href={`https://www.youtube.com/watch?v=${trailer.key}`} target="_blank" className={style.main} title={`watch the trailer on ${trailer.site}`} >
            Official Trailer
            <Image src='/play.svg' alt='play icon' width={13} height={13} />
        </a>
    );
}