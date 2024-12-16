

import styles from '@/styles/components/pages/app/movies.module.css';
import Search from '@/components/shared/Search';
import Select from '@/components/shared/ListGenres';
import Card from '@/components/shared/Card';
import { AllMovies } from '@/types/movies';
import { getMovies } from '@/utils/movies.api';

export default async function Movies() {
  const movies: AllMovies = await getMovies();

  return(
    <div className={styles.main} >
      <div className={styles.filter} >
        <h3>Search</h3>
        <Search />
        <h3>Genres</h3>
        <Select id={0} />
     </div>
      <div className={styles.movies} >
        <div className={styles.title} >
          <h2>Popular</h2>
        </div>
        <div className={styles.section} >
          <div className={styles.list} >
            {movies.popular.map((movie, i) => (
              <Card key={i} movie={movie} />
            ))}
          </div>
        </div>
        <div className={styles.title} >
          <h2>Now Paying</h2>
        </div>
        <div className={styles.section} >
          <div className={styles.list} >
            {movies.nowPlaying.map((movie, i) => (
              <Card key={i} movie={movie} />
            ))}
          </div>
        </div>
        <div className={styles.title} >
          <h2>Upcoming</h2>
        </div>
        <div className={styles.section} >
          <div className={styles.list} >
            {movies.coming.map((movie, i) => (
              <Card key={i} movie={movie} />
            ))}
          </div>
        </div>
        <div className={styles.title} >
          <h2>Top Rated</h2>
        </div>
        <div className={styles.section} >
          <div className={styles.list} >
            {movies.topRated.map((movie, i) => (
              <Card key={i} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}