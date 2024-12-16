import ByFavorite from "@/components/pages/movies/favorites/ByFavorite";
import Select from "@/components/shared/ListGenres";
import Search from "@/components/shared/Search";
import style from "@/styles/pages/genres.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "QUICKBET - your favorite movies list",
  description: "All your movies in one place, add the one you are interested in.",
};

export default function Page() {
    return (
        <div className={style.main} >
            <div className={style.filter} >
                <h3>Search</h3>
                <Search />
                <h3>Genres</h3>
                <Select id={0} />
            </div>
            <div className={style.movie} >
                <ByFavorite />
            </div>
        </div>
    );
}
