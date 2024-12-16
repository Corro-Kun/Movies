import { GenreMovies } from "@/types/movies";
import Link from "next/link";
import style from '@/styles/components/shared/tag.module.css';
import { paths } from "@/config/paths";

export default function Tag({genre}: {genre: GenreMovies}) {
    return(
        <Link href={paths.genre.getHref(genre.id)} className={style.main} >
            {genre.name}
        </Link>
    );
}