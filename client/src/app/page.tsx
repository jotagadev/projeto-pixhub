import styles from "./page.module.css";
import Register from "@/components/Register/Register";
import RegisterSlogan from "@/components/RegisterSlogan/RegisterSlogan";

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.section_register}>
        <div className={styles.section_register_left}>
          <RegisterSlogan></RegisterSlogan>
        </div>

        <div className={styles.section_register_right}>
          <Register></Register>
        </div>
      </section>
    </main>
  );
}
