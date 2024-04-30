"use client";

import PhotosGallery from "@/components/PhotosGallery/PhotosGallery";
import styles from "./page.module.css";
import { FaPaintBrush, FaBuilding } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { MdVideogameAsset } from "react-icons/md";
import { PiSwordDuotone } from "react-icons/pi";
import { SiRetroarch } from "react-icons/si";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Explorar() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const api = query
    ? `http://localhost:3333/api/photos/${query}`
    : "http://localhost:3333/api/photos";

  return (
    <div className={styles.container}>
      <h1 className={styles.slogan}>Explore novos horizontes</h1>
      <div className={styles.cats}>
        <Link href="?q=Arte" className={styles.cat}>
          <FaPaintBrush />
          <p>Arte</p>
        </Link>

        <Link href="?q=Natureza" className={styles.cat}>
          <FaSun />
          <p>Natureza</p>
        </Link>
        <Link href="?q=Urbano" className={styles.cat}>
          <FaBuilding />
          <p>Urbano</p>
        </Link>
        <Link href="?q=Anime" className={styles.cat}>
          <PiSwordDuotone />
          <p>Anime</p>
        </Link>
        <Link href="?q=Jogos" className={styles.cat}>
          <MdVideogameAsset />
          <p>Jogos</p>
        </Link>
        <Link href="?q=Pixel Art" className={styles.cat}>
          <SiRetroarch />
          <p>Pixel art</p>
        </Link>
      </div>
      {query && (
        <div className={styles.filterdiv}>
          {" "}
          <p className={styles.filter}>
            Filtrando por categoria :{" "}
            <span className={styles.filterdestaque}>{query}</span>
          </p>
          <Link className={styles.closefilter} href="/explorar">X</Link>
        </div>
      )}
      <PhotosGallery query={query} api={api}></PhotosGallery>
    </div>
  );
}
