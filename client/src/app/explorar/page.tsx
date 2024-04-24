import PhotosGallery from "@/components/PhotosGallery/PhotosGallery";
import styles from "./page.module.css";
import { FaPaintBrush, FaBuilding } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { MdVideogameAsset } from "react-icons/md";
import { PiSwordDuotone } from "react-icons/pi";
import { SiRetroarch } from "react-icons/si";

export default function Explorar() {


  return (
    <div className={styles.container}>
      <h1 className={styles.slogan}>Explore novos horizontes</h1>
      <div className={styles.cats}>
        
        <button className={styles.cat}>
          <FaPaintBrush />
          Arte
        </button>
        
        <button className={styles.cat}>
          <FaSun />
          Natureza
        </button>
        <button className={styles.cat}>
          <FaBuilding />
          Urbano
        </button>
        <button className={styles.cat}>
          <PiSwordDuotone />
          Anime
        </button>
        <button className={styles.cat}>
          <MdVideogameAsset />
          Jogos
        </button>
        <button className={styles.cat}>
          <SiRetroarch />
          Pixel art
        </button>
      </div>
      <PhotosGallery></PhotosGallery>
    </div>
  );
}
