"use client"

import { createPost } from "@/actions";
import styles from "./page.module.css";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";

export default function Criar() {
  const [file, setFile] = useState<File>();
  const [error, setError] = useState('');

  const [inputs, setInputs] = useState({
    titulo: "",
    description: "",
    categoria: "Arte",
  });

  useEffect(() => {
    setTimeout(() => {
      setError('');
    }, 5000);
  }, [error])

  console.log(inputs)
  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSumbit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!file){
      setError("Você não colocou a imagem!")
      return;
    }

    if(!inputs.titulo){
      setError("Você não colocou o arquivo!")
      return;
    }

    if(!inputs.description){
      setError("Você não colocou a decrição!")
      return;
    }

    
    const data = new FormData();
    data.set('file', file);
    data.append('titulo', inputs.titulo);
    data.append('description', inputs.description)
    data.append('categoria', inputs.categoria)

    createPost(data);

  }

  return (
    <form className={styles.container} onSubmit={handleSumbit}>
      <div className={styles.header}>
        <h1 className={styles.titulo}>Criar postagem</h1>
        <button className={styles.publicarbtn}>Publicar</button>
      </div>
      <div className={styles.content}>
      <button className={styles.mobilepublicarbtn}>Publicar</button>
        <div className={styles.imagem}>
          <label className={styles.selecionar} htmlFor="imagem">
            Selecionar imagem
          </label>
          <input
            className={styles.input}
            id="imagem"
            name="file"
            type="file"
            onChange={(e) => setFile(e.target.files?.[0])}
          ></input>
        </div>
        <div className={styles.info}>
          <div className={styles.inputbox}>
            <label htmlFor="titulo" className={styles.inputlabel}>
              Título da publicação
            </label>
            <input
              name="titulo"
              id="titulo"
              className={styles.inputcontent}
              placeholder="Coloque o titulo aqui"
              onChange={handleInputChange}
            ></input>
          </div>
          <div className={styles.inputbox}>
            <label htmlFor="titulo" className={styles.inputlabel}>
              Descrição da publicação
            </label>
            <textarea
              onChange={handleInputChange}
              name="description"
              style={{ minHeight: "150px" }}
              className={styles.inputcontent}
              placeholder="Descreva o conteúdo da sua imagem"
            ></textarea>
          </div>
          <div className={styles.inputbox}>
          <label htmlFor="titulo" className={styles.inputlabel}>
              Categoria da publicação
            </label>
            <select className={`${styles.inputcontent} ${styles.select}`} id="escolha" name="categoria" onChange={handleInputChange}>
              <option value="Arte">Arte</option>
              <option value="Natureza">Natureza</option>
              <option value="Urbano">Urbano</option>
              <option value="Anime">Anime</option>
              <option value="Jogos">Jogos</option>
              <option value="Pixel art">Pixel art</option>
            </select>
          </div>
          <p className={styles.erro}>{error}</p>
        </div>
      </div>
    </form>
  );
}
