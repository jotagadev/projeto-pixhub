import PhotosGallery from "@/components/PhotosGallery/PhotosGallery";
import styles from "./page.module.css";
import { FaPaintBrush, FaBuilding } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { MdVideogameAsset } from "react-icons/md";
import { PiSwordDuotone } from "react-icons/pi";
import { SiRetroarch } from "react-icons/si";
import { getSessionInfo } from "@/actions";

export default async function Explorar() {

  const session = getSessionInfo();

  const api = "https://jsonplaceholder.typicode.com/photos"

  return (
    <div className={styles.container}>
      <h1 className={styles.slogan}>Explore novos horizontes</h1>
      <div className={styles.cats}>
        
        <button className={styles.cat}>
          <FaPaintBrush />
          <p>Arte</p>
        </button>
        
        <button className={styles.cat}>
          <FaSun />
          <p>Natureza</p>
        </button>
        <button className={styles.cat}>
          <FaBuilding />
          <p>Urbano</p>
        </button>
        <button className={styles.cat}>
          <PiSwordDuotone />
          <p>Anime</p>
        </button>
        <button className={styles.cat}>
          <MdVideogameAsset />
          <p>Jogos</p>
        </button>
        <button className={styles.cat}>
          <SiRetroarch />
          <p>Pixel art</p>
        </button>
      </div>
      <PhotosGallery api={api}></PhotosGallery>
    </div>
  );
}
