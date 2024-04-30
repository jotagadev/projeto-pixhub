"use client"

import { useState, useEffect } from "react";
import styles from "./photosgallery.module.css";
import Link from "next/link";

type Photo = {
    photoURL: string,
    id: string,
    title: string,
}

type Props = {
  api: string,
  query: string | null,
}

export default function PhotosGallery({api, query} : Props) {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados das fotos");
        }
        const json = await response.json();
        setPhotos(json);
      } catch (error) {
        console.error("Erro ao buscar os dados das fotos:", error);
      }
    };

    getPosts();
  }, [query]);


  return (
    <div className={styles.container}>
      {photos.map((photo) => (
        <div  className={styles.divphoto} key={photo.id}>
          <Link href={`/explorar/photo/${photo.id}`}><img className={styles.img} src={photo.photoURL} alt={photo.title} /></Link>
        </div>
      ))}
    </div>
  );
}
