"use client"

import { useState } from "react";
import RegisterLogo from "../Logo/RegisterLogo";
import styles from "./registerdialog.module.css";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaLock, FaUser } from "react-icons/fa";

type Props = {
    option : boolean;
    closeDialog : (option: boolean) => void;
}

export default function RegisterDialog({ option, closeDialog } : Props)  {
    const [inputs, setInputs] = useState({
        email: "",
        usuario: "",
        senha: "",
    });

    const [login, setLogin] = useState(option);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    const onClick = () => {
        console.log(inputs)
    }

    const switchLogin = () => {
        setLogin((prev) => !prev);
    }

    

  return (
    <div className={styles.container}>
      <RegisterLogo></RegisterLogo>
      <button onClick={closeDialog} className={styles.closebtn}>x</button>

      <div className={styles.conteudo}>
        <div className={styles.slogan}>
        {
  login ? (
    <>
      <h4 className={styles.titulo}>
        Seja <span className={styles.span1}>bem vindo</span> de volta!
      </h4>
      <p className={styles.subtitulo}>É bom ter você de novo.</p>
    </>
  ) : (
    <>
      <h4 className={styles.titulo}>
        Seja <span className={styles.span1}>bem vindo!</span>
      </h4>
      <p className={styles.subtitulo}>Entre num mundo de possibilidades</p>
    </>
  )
}
        </div>
        <div className={styles.inputs}>
           {!login && (<div className={styles.inputbox}>
            <BsEnvelopeFill className={styles.inputicon}></BsEnvelopeFill>
            <input onChange={onChange} name="email" className={styles.input} placeholder="Email"></input>
          </div>)}
          <div className={styles.inputbox}>
            <FaUser className={styles.inputicon}></FaUser>
            <input onChange={onChange} name="usuario" className={styles.input} placeholder="Nome de usuário"></input>
          </div>
          <div className={styles.inputbox}>
            <FaLock className={styles.inputicon}></FaLock>
            <input
            onChange={onChange}
            name="senha"
            className={styles.input}
            placeholder={login ? "Sua senha " : "Crie uma senha"}
            ></input>
          </div>
          <button onClick={onClick} className={styles.botao1}>{login ? "Entrar" : "Inscrever-se"}</button>
        </div>
      </div>
      <div className={styles.perguntas}>
        {
        login ? 
        <p className={styles.pergunta1}>
          Você quer se registrar?{" "}
          <span onClick={switchLogin} className={`${styles.span1} ${styles.switchlogin}`}>Clique aqui</span> para voltar
        </p> : 
        <p className={styles.pergunta1}>
          Você já possui uma conta?{" "}
          <span onClick={switchLogin} className={`${styles.span1} ${styles.switchlogin}`}>Clique aqui</span> para entrar
        </p>
        }
      </div>
    </div>
  );
}
