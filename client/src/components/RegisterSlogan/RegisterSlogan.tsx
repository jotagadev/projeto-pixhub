import Image from "next/image";
import styles from "./registerslogan.module.css";

export default function RegisterSlogan() {
  return (
    <>
      <Image
        alt="Animação pessoa criativa"
        className={styles.section_register_gif}
        src="/gif/creative7.gif"
        width={500}
        height={500}
      ></Image>
      <h1 className={styles.section_register_left_h1}>
        Mostre a sua{" "}
        <span className={styles.spandestaque_color1}>criatividade</span> para o
        mundo.
      </h1>
    </>
  );
}
