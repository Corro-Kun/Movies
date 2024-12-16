import Image from "next/image";
import style from "@/styles/components/layout/header.module.css";
import Link from "next/link";
import Profile from "@/components/layout/Profile";
import { paths } from "@/config/paths";

export default function Header(){
    return (
        <header className={style.header} >
            <div>
                <Link href="/" >
                    <Image src="/logo.svg" alt="logo" width={164} height={50}/>
                </Link>
                <div className={style.links} >
                    <Link href={paths.genre.getHref(878)} >Popular</Link>
                    <Link href={paths.favorites.getHref()} >Favorites</Link>
                </div>
           </div>
            <Profile />
        </header>
    );
}