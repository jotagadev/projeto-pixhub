"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const page_module_css_1 = require("./page.module.css");
function Criar() {
    return (<div className={page_module_css_1.default.container}>
      <div className={page_module_css_1.default.header}>
        <h1 className={page_module_css_1.default.titulo}>Criar postagem</h1>
        <button className={page_module_css_1.default.publicarbtn}>Publicar</button>
      </div>
      <div className={page_module_css_1.default.content}>
      <button className={page_module_css_1.default.mobilepublicarbtn}>Publicar</button>
        <div className={page_module_css_1.default.imagem}>
          <label className={page_module_css_1.default.selecionar} htmlFor="imagem">
            Selecionar imagem
          </label>
          <input className={page_module_css_1.default.input} id="imagem" name="imagem" type="file"></input>
        </div>
        <div className={page_module_css_1.default.info}>
          <div className={page_module_css_1.default.inputbox}>
            <label htmlFor="titulo" className={page_module_css_1.default.inputlabel}>
              Título da publicação
            </label>
            <input id="titulo" className={page_module_css_1.default.inputcontent} placeholder="Coloque o titulo aqui"></input>
          </div>
          <div className={page_module_css_1.default.inputbox}>
            <label htmlFor="titulo" className={page_module_css_1.default.inputlabel}>
              Descrição da publicação
            </label>
            <textarea id="titulo" style={{ minHeight: "150px" }} className={page_module_css_1.default.inputcontent} placeholder="Descreva o conteúdo da sua imagem"></textarea>
          </div>
          <div className={page_module_css_1.default.inputbox}>
          <label htmlFor="titulo" className={page_module_css_1.default.inputlabel}>
              Categoria da publicação
            </label>
            <select className={`${page_module_css_1.default.inputcontent} ${page_module_css_1.default.select}`} id="escolha" name="escolha">
              <option value="opcao1">Opção 1</option>
              <option value="opcao2">Opção 2</option>
              <option value="opcao3">Opção 3</option>
            </select>
          </div>
        </div>
      </div>
    </div>);
}
exports.default = Criar;
//# sourceMappingURL=page.js.map