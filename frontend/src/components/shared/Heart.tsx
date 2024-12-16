'use client';

import { Movie } from "@/types/movies";
import Image from "next/image";
import { useState } from "react";

export default function Heart({movie}: {movie: Movie}) {
    const [Key, setKey] = useState(0);

    function addedFavorite() {
      const listId = JSON.parse(localStorage.getItem('listId') || '[]');
      const listFav = JSON.parse(localStorage.getItem('listFav') || '[]');

      if (!listId.includes(movie.id)) {
        listId.push(movie.id);
        listFav.push(movie);

        localStorage.setItem('listId', JSON.stringify(listId));
        localStorage.setItem('listFav', JSON.stringify(listFav));
        setKey((prevKey) => prevKey + 1); 
      }
    }

    function deleteFavorite(){
      const listId = JSON.parse(localStorage.getItem('listId') || '[]');
      const listFav = JSON.parse(localStorage.getItem('listFav') || '[]');

      const updatedListId = listId.filter((id: number) => id !== movie.id);
      const updatedListFav = listFav.filter((fav: Movie) => fav.id !== movie.id);

      localStorage.setItem('listId', JSON.stringify(updatedListId));
      localStorage.setItem('listFav', JSON.stringify(updatedListFav));
      setKey((prevKey) => prevKey + 1);
    }

    return(
        <div style={{cursor: "pointer"}} >
            {
            JSON.parse(localStorage.getItem('listId') || '[]').includes(movie.id) ?
                <Image src="/heart_active.svg" alt="heart" width={30} height={30} onClick={()=> deleteFavorite()} />
            :
                <Image src="/heart.svg" alt="Play" width={30} height={30} onClick={()=> addedFavorite()} />
            }
        </div>
    );
}