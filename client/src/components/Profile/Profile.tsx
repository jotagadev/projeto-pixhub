"use client"

import Link from "next/link";
import { redirect, useParams, useSearchParams } from "next/navigation";
import React from "react";
import { FaGear } from "react-icons/fa6";
import { IoMdPhotos } from "react-icons/io";
import styles from "./profile.module.css";
import PhotosGallery from "../PhotosGallery/PhotosGallery";

export default function Profile({session} : any) {
  const searchParams = useSearchParams();
  const params = useParams();
  const query = searchParams.get("q");

  if (query != "galeria" && query != "config") {
    redirect(`/explorar/perfil/${params.slug}?q=galeria`);
  }

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src="/images/messi.jpeg"></img>
      <div className={styles.nomeeconfig}>
        <h1 className={styles.nome}>{session?.username && session.username}</h1>
        <div className={styles.icons}>
          <Link href="?q=galeria">
            <IoMdPhotos
              className={`${styles.configicon} ${
                query == "galeria" && styles.active
              }`}
            />
          </Link>
          <Link href="?q=config">
            <FaGear
              className={`${styles.configicon} ${
                query == "config" && styles.active
              }`}
            />
          </Link>
        </div>
      </div>
      {query == "galeria" && (
        <PhotosGallery api="https://jsonplaceholder.typicode.com/photos?albumId=1"></PhotosGallery>
      )}
      {query == "config"}
    </div>
  );
}
