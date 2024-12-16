'use client';

import { paths } from "@/config/paths";
import styles from "@/styles/components/ui/search.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const router = useRouter();

  const [Value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return (
    <div className={styles.search} >
      <input type="text" placeholder="Keywords" onChange={(e) => handleChange(e)} />
      <Image src="/search.svg" width={20} height={20} alt="Search" onClick={()=> router.push(paths.search.getHref(Value))} />
    </div>
  );
}