"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useParams } from "next/navigation";
import { useAuth } from "@/components/AuthProvider/AuthProvider";
import Link from "next/link";

type Photo = {
  photoURL: string;
  id: string;
  title: string;
  description: string;
  userId: string;
  category: string;
};

type Profile = {
  id: number;
  name: string;
  email: string;
};

export default function Photo() {
  const session = useAuth();
  const params = useParams();

  const api = `http://localhost:3333/api/photo/${params.slug}`;

  const [profile, setProfile] = useState<Profile>({});
  const [photo, setPhoto] = useState<Photo>();
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados das fotos");
        }
        const json = await response.json();
        console.log(json);
        setPhoto(json);
      } catch (error) {
        console.error("Erro ao buscar os dados das fotos:", error);
      }
    };

    getPosts();
  }, []);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await fetch(`http://localhost:3333/api/user/${session?.userId}`);
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados do usuario");
        }
        const json = await response.json();
        setProfile(json);
      } catch (error) {
        console.error("Erro ao buscar os dados do usuario", error);
      }
    };

    getProfile();
  }, []);

  console.log(photo?.userId);

  return (
    <div className={styles.container}>
      <img className={styles.img} src={photo?.photoURL}></img>
      <div className={styles.info}>
        <div className={styles.titulodiv}>
        <h1 className={styles.titulo}>
            {photo?.title}
        </h1>
        <small className={styles.cat}>{photo?.category}</small>
        </div>
        <div className={styles.autor}>
          <img className={styles.autorimg} src="/images/defaultavatar.png"></img>
          <Link href={`/explorar/perfil/${photo?.userId}`}><p className={styles.autornome}>{profile.name}</p></Link>
        </div>
        <p className={styles.desc}>{photo?.description}</p>
        <Link className={styles.explorarbtn} href="/explorar">Voltar a explorar</Link>
      </div>
    </div>
  );
}
