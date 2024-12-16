import style from "@/styles/components/pages/movies/byGeneres.module.css";
import { searchMovie } from "@/utils/movies.api";
import Card from "@/components/shared/Card";

export async function ByQuery({id}: {id: string}) {
    const movies = await searchMovie(id);
    return (
        <div className={style.main} >
            {movies?.map((item, i)=> (
                <Card key={i} movie={item} />
            ))}
        </div>
    )
}