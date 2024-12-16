import { ByGeneres } from '@/components/pages/movies/genres/ByGeneres';
import Select from '@/components/shared/ListGenres';
import Loader from '@/components/ui/Loader';
import Search from '@/components/shared/Search';
import { paths } from '@/config/paths';
import style from '@/styles/pages/genres.module.css';
import { genres } from '@/utils/genres.list';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

export default async function Page({
    params,
}: {params: {id: number}}) {
    const { id } = await params;
    if (!(id in genres)){
        redirect(paths.home.getHref());
    }
    return (
        <div className={style.main} >
            <div className={style.filter} >
                <h3>Search</h3>
                <Search />
                <h3>Genres</h3>
                <Select id={id} />
            </div>
            <div className={style.movie} >
                <Suspense fallback={<Loader />} >
                    <ByGeneres id={id} />
                </Suspense>
            </div>
        </div>
    );
}