"use client"

import { useState, useEffect } from "react";
import styles from "./photosgallery.module.css";

type Photo = {
    url: string,
    id: string,
    title: string,
}

type Props = {
  api: string,
}

export default function PhotosGallery({api} : Props) {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados das fotos");
        }
        const json = await response.json();
        const limitedPhotos = json.slice(0, 100);
        setPhotos(limitedPhotos);
      } catch (error) {
        console.error("Erro ao buscar os dados das fotos:", error);
      }
    };

    getPosts();
  }, []);


  return (
    <div className={styles.container}>
      {photos.map((photo) => (
        <div className={styles.divphoto} key={photo.id}>
          <img className={styles.img} src={photo.url} alt={photo.title} />
        </div>
      ))}
    </div>
  );
}
