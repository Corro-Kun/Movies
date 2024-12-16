import { getByGenre } from "@/utils/movies.api";
import Card from "@/components/shared/Card";
import style from '@/styles/components/pages/movies/byGeneres.module.css';

export async function ByGeneres({id}: {id: number}){
    const movies = await getByGenre(id);
    return (
        <div className={style.main} >
            {movies?.map((item, i)=> (
                <Card key={i} movie={item} />
            ))}
        </div>
    );
}