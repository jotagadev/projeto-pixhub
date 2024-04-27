"use client"

import Link from "next/link";
import { redirect, useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaGear } from "react-icons/fa6";
import { IoMdPhotos } from "react-icons/io";
import styles from "./profile.module.css";
import PhotosGallery from "../PhotosGallery/PhotosGallery";
import Image from "next/image";

type Profile = {
    "id": number,
    "name" : string,
    "email" : string,
}

export default function Profile({session} : any) {

  const searchParams = useSearchParams();
  const params = useParams();
  const query = searchParams.get("q");
  const [profile, setProfile] = useState<Profile>({});

  if (query != "galeria" && query != "config") {
    redirect(`/explorar/perfil/${params.slug}?q=galeria`);
  }

  
    
  
    useEffect(() => {
      const getProfile = async () => {
        try {
          const response = await fetch(`http://localhost:3333/api/user/${params.slug}`);
          if (!response.ok) {
            throw new Error("Erro ao buscar os dados das fotos");
          }
          const json = await response.json();
          setProfile(json);
        } catch (error) {
          console.error("Erro ao buscar os dados das fotos:", error);
        }
      };
  
      getProfile();
    }, []);

    console.log(profile);
    if (!profile.id){
        return (
            <div className={styles.containererro}>
                <h1 className={styles.pagelosth1}>Este perfil não existe</h1>
                <div className={styles.imagemebtn}>
                <Image src="/svg/page-lost.svg" alt="perfil nao existe" width={500} height={500}></Image>
                <Link href="/explorar"><button className={styles.lostbtn}>Voltar a explorar</button></Link>
                </div>
            </div>
        );
    }

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src="/images/defaultavatar.png"></img>
      <div className={styles.nomeeconfig}>
        <h1 className={styles.nome}>{profile.name}</h1>
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
