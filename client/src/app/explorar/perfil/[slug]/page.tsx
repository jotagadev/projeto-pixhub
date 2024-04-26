"use client"

import PhotosGallery from "@/components/PhotosGallery/PhotosGallery";
import styles from "./page.module.css";
import { FaGear } from "react-icons/fa6";
import { IoMdPhotos } from "react-icons/io";
import { useRouter, useSearchParams,useParams } from "next/navigation";
import Link from "next/link";


export default function Perfil() {


  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  const query = searchParams.get("q");

  if(query != "galeria" && query != "config"){
    router.replace(`/explorar/perfil/${params.slug}?q=galeria`)
  }


  return (

    <div className={styles.container}>
      <img className={styles.avatar} src="/images/messi.jpeg"></img>
      <div className={styles.nomeeconfig}>
        <h1 className={styles.nome}>Lionel Messi</h1>
        <div className={styles.icons}>
          <Link href="?q=galeria"><IoMdPhotos className={`${styles.configicon} ${query== "galeria" && styles.active}`} /></Link>
          <Link href="?q=config"><FaGear className={`${styles.configicon} ${query== "config" && styles.active}`} /></Link>
        </div>
      </div>
      {
      query == "galeria" && <PhotosGallery api="https://jsonplaceholder.typicode.com/photos?albumId=1"></PhotosGallery>
      }
      {query == "config"}

    </div>
  );
}
