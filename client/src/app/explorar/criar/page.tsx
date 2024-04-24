import styles from "./page.module.css";

export default function Criar() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.titulo}>Criar postagem</h1>
        <button className={styles.publicarbtn}>Publicar</button>
      </div>
      <div className={styles.content}>
        <div className={styles.imagem}>
          <label className={styles.selecionar} htmlFor="imagem">
            Selecionar imagem
          </label>
          <input
            className={styles.input}
            id="imagem"
            name="imagem"
            type="file"
          ></input>
        </div>
        <div className={styles.info}>
          <div className={styles.inputbox}>
            <label htmlFor="titulo" className={styles.inputlabel}>
              Título da publicação
            </label>
            <input
              id="titulo"
              className={styles.inputcontent}
              placeholder="Coloque o titulo aqui"
            ></input>
          </div>
          <div className={styles.inputbox}>
            <label htmlFor="titulo" className={styles.inputlabel}>
              Descrição da publicação
            </label>
            <textarea
              id="titulo"
              style={{ minHeight: "150px" }}
              className={styles.inputcontent}
              placeholder="Descreva o conteúdo da sua imagem"
            ></textarea>
          </div>
          <div className={styles.inputbox}>
          <label htmlFor="titulo" className={styles.inputlabel}>
              Categoria da publicação
            </label>
            <select className={`${styles.inputcontent} ${styles.select}`} id="escolha" name="escolha">
              <option value="opcao1">Opção 1</option>
              <option value="opcao2">Opção 2</option>
              <option value="opcao3">Opção 3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
