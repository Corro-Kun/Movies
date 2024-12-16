'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import style from '@/styles/components/ui/back.module.css'

export default function Back() {
    const router = useRouter();
    return (
        <Image className={style.main} onClick={() => router.back()} src="/back.svg" alt="Back" width={24} height={24} />
    );
}