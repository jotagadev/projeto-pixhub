"use client";

import { useState, useEffect } from "react";
import RegisterLogo from "../Logo/RegisterLogo";
import styles from "./registerdialog.module.css";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaLock, FaUser } from "react-icons/fa";
import { useFormState } from "react-dom";
import { entrar, registrar } from "@/actions";

type Props = {
  option: boolean;
  closeDialog: () => void;
};

export default function RegisterDialog({ option, closeDialog }: Props) {
  const [login, setLogin] = useState(option);

  useEffect(() => {
    setLogin(option)
  }, [option]);
  

  const [state, formAction] = useFormState<any, FormData>(login ? entrar : registrar, undefined);

  const switchLogin = () => {
    setLogin((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <RegisterLogo></RegisterLogo>
      <button onClick={closeDialog} className={styles.closebtn}>
        x
      </button>

      <div className={styles.conteudo}>
        <div className={styles.slogan}>
          {login ? (
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
              <p className={styles.subtitulo}>
                Entre num mundo de possibilidades
              </p>
            </>
          )}
        </div>
        <form className={styles.inputs} action={formAction}>
          <div className={styles.inputbox}>
            <BsEnvelopeFill className={styles.inputicon}></BsEnvelopeFill>
            <input
              name="email"
              className={styles.input}
              placeholder="Email"
            ></input>
          </div>

          {!login && (
            <div className={styles.inputbox}>
              <FaUser className={styles.inputicon}></FaUser>
              <input
                name="nome"
                className={styles.input}
                placeholder="Nome de usuário"
                type="text"
              ></input>
            </div>
          )}
          <div className={styles.inputbox}>
            <FaLock className={styles.inputicon}></FaLock>
            <input
              name="senha"
              className={styles.input}
              placeholder={login ? "Sua senha " : "Crie uma senha"}
              type="password"
            ></input>
          </div>
          <button className={styles.botao1}>
            {login ? "Entrar" : "Inscrever-se"}
          </button>
          {state?.error && <p className={styles.erro}>{state.error}</p>}
        </form>
      </div>

      <div className={styles.perguntas}>
        {login ? (
          <p className={styles.pergunta1}>
            Você não tem uma conta?{" "}
            <span
              onClick={switchLogin}
              className={`${styles.span1} ${styles.switchlogin}`}
            >
              Clique aqui
            </span>{" "}
            para se registrar
          </p>
        ) : (
          <p className={styles.pergunta1}>
            Você já possui uma conta?{" "}
            <span
              onClick={switchLogin}
              className={`${styles.span1} ${styles.switchlogin}`}
            >
              Clique aqui
            </span>{" "}
            para entrar
          </p>
        )}
      </div>
    </div>
  );
}
