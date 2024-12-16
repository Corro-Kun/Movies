'use client';

import styles from '@/styles/components/shared/Card.module.css';
import Image from 'next/image';
import Percentage from '@/components/shared/Percentage';
import { Movie } from '@/types/movies';
import { paths } from '@/config/paths';
import Link from 'next/link';
import { useState } from 'react';

export default function Card({movie}: {movie: Movie}) {
  const [Key, setKey] = useState(0);

  function addedFavorite() {
    const listId = JSON.parse(localStorage.getItem('listId') || '[]');
    const listFav = JSON.parse(localStorage.getItem('listFav') || '[]');

    if (!listId.includes(movie.id)) {
      listId.push(movie.id);
      listFav.push(movie);

      localStorage.setItem('listId', JSON.stringify(listId));
      localStorage.setItem('listFav', JSON.stringify(listFav));
      setKey((prevKey) => prevKey + 1); // Forzar re-render
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
    <div className={styles.card} key={Key} >
      <Link href={paths.movie.getHref(movie.id)} >
        <picture className={styles.poster} >
          <img src={'https://image.tmdb.org/t/p/w300'+movie?.poster_path} alt={movie.title} />
        </picture>
      </Link>
      <div className={styles.title} >
        <h3>{movie?.title}</h3>
      </div>
      <div className={styles.date} >
        <p>{movie?.release_date}</p>
      </div>
      <div className={styles.end} >
        <div>
          <p>Rating</p>
          <Percentage type='card' percentage={movie.vote_average} />
        </div>
        <div>
          <p>Favorites</p>
          {
            JSON.parse(localStorage.getItem('listId') || '[]').includes(movie.id) ?
            <Image src="/heart_active.svg" alt="heart" width={32} height={32} onClick={()=> deleteFavorite()} />
            :
            <Image src="/heart.svg" alt="heart" width={32} height={32} onClick={()=> addedFavorite()} />
          }
        </div>
      </div>
    </div>
  );
}