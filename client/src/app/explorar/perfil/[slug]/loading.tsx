import Image from "next/image"
import styles from "./loading.module.css"

export default function loading () {
    <div className={styles.container}>
        <Image alt="animação de carregamento" src="/gif/loading.gif" width={1000} height={1000}></Image>
        <h1 className={styles.h1}>Loading</h1>
    </div>
}