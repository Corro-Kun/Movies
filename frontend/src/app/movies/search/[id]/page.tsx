import style from "@/styles/pages/genres.module.css";
import Search from "@/components/shared/Search";
import Select from "@/components/shared/ListGenres";
import { Suspense } from "react";
import Loader from "@/components/ui/Loader";
import { ByQuery } from "@/components/pages/movies/search/ByQuery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "QUICKBET - Find your favorite movie",
  description: "Search by name for any movie that is available that interests you.",
};

export default async function Page({
    params,
}: {params: {id: string}}) {
    return (
        <div className={style.main} >
            <div className={style.filter} >
                <h3>Search</h3>
                <Search />
                <h3>Genres</h3>
                <Select id={0} />
            </div>
            <div className={style.movie} >
                <Suspense fallback={<Loader />} >
                    <ByQuery id={params.id} />
                </Suspense>
            </div>
        </div>
    );
}