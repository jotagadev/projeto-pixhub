import HomeNavbar from "@/components/HomeNavbar/HomeNavbar";
import styles from "./page.module.css";
import Register from "@/components/Register/Register";
import RegisterSlogan from "@/components/RegisterSlogan/RegisterSlogan";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeNavbar></HomeNavbar>
      <main className={styles.container}>
        <section className={styles.section_slogan}>
          <div className={styles.slogan}>
            <h1 className={styles.slogantext}>
              Explore todas as formas de arte
            </h1>
            <h2 className={styles.slogan_subt}>Veja, se inspire, crie</h2>
          </div>

          <HomeSlider></HomeSlider>
          <button className={styles.downbtn}>
            <FaArrowDown></FaArrowDown>
          </button>
          <aside className={styles.span1}>
            <p className={styles.visitante}>entrar como visitante</p>
          </aside>
        </section>

        <section className={styles.section_portfolio}>
          <div className={styles.port_imagem}>
            <Image alt="Homem mexendo em arquivo" width={700} height={700} unoptimized src="/gif/research.gif"></Image>
          </div>
          <div className={styles.port_content}>
            <h1 className={styles.port_h1}>
              Toda a sua criação <span className={styles.port_destaque}>em um só lugar</span>
            </h1>
            <p className={styles.port_subt}>Use como seu portfolio, como seu perfil artístico, como um lugar pra chamar de seu. Aqui, você decide.</p>
          </div>
        </section>

        <section className={styles.section_ideas}>
          <div className={styles.ideas_imagem}>
            <Image alt="Homem vendo ideias" width={700} height={700} unoptimized src="/gif/ideas.gif"></Image>
          </div>
          <div className={styles.ideas_content}>
            <h1 className={styles.ideas_h1}>
              Explore novas ideias<span className={styles.ideas_destaque}> e se inspire</span>
            </h1>
            <p className={styles.ideas_subt}>Explore as ideias das outras pessoas, se inspire e contribua para a comunidade. Juntos, somos mais criativos!</p>
          </div>
        </section>

        <section className={styles.section_register}>
          <div className={styles.section_register_left}>
            <RegisterSlogan></RegisterSlogan>
          </div>

          <div className={styles.section_register_right}>
            <Register></Register>
          </div>
        </section>
      </main>
    </>
  );
}
