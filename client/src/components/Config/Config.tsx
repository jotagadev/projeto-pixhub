import React from 'react'
import styles from "./config.module.css"
import { useAuth } from '../AuthProvider/AuthProvider'
import { changeUsername } from '@/actions';

export default function Config() {

    const session = useAuth();
  return (

    <div className={styles.container}>
        <h1 className={styles.titulo}>Configurações</h1>
        <form className={styles.inputbox} action={changeUsername}>
        <input name='username' placeholder={`${session.username}`} className={styles.input}></input>
        <button className={styles.inputbtn}>Mudar nome de usuário</button>
        </form>
    </div>

  )
}
