import MovieDetail from "@/components/pages/movies/MovieDetail";
import Recommendations from "@/components/pages/movies/Recommendations";
import Loader from "@/components/ui/Loader";
import { getMovie } from "@/utils/movies.api";
import { Suspense } from "react";
import { paths } from "@/config/paths";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }: { params: { id: number } }) {
    const {id} = await params;
    const movie = await getMovie(Number(id));

    if (!movie) {
        return {
            title: 'Movie not found',
            description: 'Movie not found'
        };
    }

    return {
        title: movie?.title,
        description: movie?.overview,
        movie
    };
}

export default async function Page({
    params,
}: {params: {id: number}}) {
    const { id } = await params;

    const metadata = await generateMetadata({ params });
    const movie = metadata.movie;

    if (!movie) {
        redirect(paths.home.getHref());
    }

    return(
        <div>
            <MovieDetail movie={movie} />
            <Suspense fallback={<Loader />} >
                <Recommendations id={id} />
            </Suspense>
        </div>
    );
}