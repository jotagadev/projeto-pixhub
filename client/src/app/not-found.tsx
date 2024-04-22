"use client"

import RegisterLogo from "@/components/Logo/RegisterLogo";
import styles from "./notfound.module.css"
import { BiSolidCommentError } from "react-icons/bi";
import { FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function NotFound () {
    const router = useRouter();

     const handleClick = () => {
        router.replace('/')
     }

    return (
       <div className={styles.container}>
            <div className={styles.logo}>
            <RegisterLogo></RegisterLogo>
            </div>
            <div className={styles.content}>
            <h1 className={styles.contenth1}><BiSolidCommentError /><br></br><br></br>Essa página <span className={styles.destaque}>não existe</span></h1>
            <button onClick={handleClick} className={styles.backbtn}><FaSignOutAlt /> Voltar à página principal</button>
            </div>
       </div>
    );
}