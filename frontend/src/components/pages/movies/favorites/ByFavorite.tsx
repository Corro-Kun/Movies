'use client';

import style from "@/styles/components/pages/movies/byGeneres.module.css";
import { Movie } from "@/types/movies";
import { useEffect, useState } from "react";
import Card from "@/components/shared/Card";

export default function ByFavorite() {
    const [data, setData] = useState<Movie[]>();

    useEffect(()=>{
        const listFav = JSON.parse(localStorage.getItem('listFav') || '[]');
        setData(listFav);
    },[]);

    return (
        <div className={style.main} >
            {data?.map((item, i)=> (
                <Card key={i} movie={item} />
            ))}
        </div>
    )
}