import Image from "next/image";
import styles from "@/styles/components/ui/loader.module.css";

export default function Loader() {
  return (
    <div className={styles.main} >
        <Image src="/loading.svg" alt="loading" width={100} height={100} />
    </div>
  );
}