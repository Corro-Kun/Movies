'use client';

import { paths } from '@/config/paths';
import styles from '@/styles/components/shared/select.module.css';
import { genres } from '@/utils/genres.list';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Select({id}: {id: number}) {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.main} >
        <div className={styles.select} onClick={()=> setActive(!active)} >
            <p>{id === 0? '____________': genres[id as keyof typeof genres]}</p>
            <Image src="/arrow.svg" width={16} height={16} alt="Arrow down icon" />
        </div>
        <div style={{display: active? '': 'none'}} className={styles.list} >
            <Link href={paths.genre.getHref(28)} >Action</Link>
            <Link href={paths.genre.getHref(12)} >Adventure</Link>
            <Link href={paths.genre.getHref(16)} >Animation</Link>
            <Link href={paths.genre.getHref(35)} >Comedy</Link>
            <Link href={paths.genre.getHref(80)} >Crime</Link>
            <Link href={paths.genre.getHref(99)} >Documentary</Link>
            <Link href={paths.genre.getHref(18)} >Drama</Link>
            <Link href={paths.genre.getHref(10751)} >Family</Link>
            <Link href={paths.genre.getHref(14)} >Fantasy</Link>
            <Link href={paths.genre.getHref(36)} >History</Link>
            <Link href={paths.genre.getHref(27)} >Horror</Link>
            <Link href={paths.genre.getHref(10402)} >Music</Link>
            <Link href={paths.genre.getHref(9648)} >Mystery</Link>
            <Link href={paths.genre.getHref(10749)} >Romance</Link>
            <Link href={paths.genre.getHref(878)} >Science Fiction</Link>
            <Link href={paths.genre.getHref(10770)} >TV Movie</Link>
            <Link href={paths.genre.getHref(53)} >Thriller</Link>
            <Link href={paths.genre.getHref(10752)} >War</Link>
            <Link href={paths.genre.getHref(37)} >Western</Link>
        </div>
    </div>
  );
}