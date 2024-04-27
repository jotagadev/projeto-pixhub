"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const RegisterLogo_1 = require("../Logo/RegisterLogo");
const register_module_css_1 = require("./register.module.css");
const bs_1 = require("react-icons/bs");
const fa_1 = require("react-icons/fa");
function Register() {
    const [inputs, setInputs] = (0, react_1.useState)({
        email: "",
        usuario: "",
        senha: "",
    });
    const [login, setLogin] = (0, react_1.useState)(false);
    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs(prev => ({
            ...prev,
            [name]: value,
        }));
    };
    const onClick = () => {
        console.log(inputs);
    };
    const switchLogin = () => {
        setLogin((prev) => !prev);
    };
    return (<div className={register_module_css_1.default.container}>
      <RegisterLogo_1.default></RegisterLogo_1.default>

      <div className={register_module_css_1.default.conteudo}>
        <div className={register_module_css_1.default.slogan}>
        {login ? (<>
      <h4 className={register_module_css_1.default.titulo}>
        Seja <span className={register_module_css_1.default.span1}>bem vindo</span> de volta!
      </h4>
      <p className={register_module_css_1.default.subtitulo}>É bom ter você de novo.</p>
    </>) : (<>
      <h4 className={register_module_css_1.default.titulo}>
        Seja <span className={register_module_css_1.default.span1}>bem vindo!</span>
      </h4>
      <p className={register_module_css_1.default.subtitulo}>Entre num mundo de possibilidades</p>
    </>)}
        </div>
        <div className={register_module_css_1.default.inputs}>
           {!login && (<div className={register_module_css_1.default.inputbox}>
            <bs_1.BsEnvelopeFill className={register_module_css_1.default.inputicon}></bs_1.BsEnvelopeFill>
            <input onChange={onChange} name="email" className={register_module_css_1.default.input} placeholder="Email"></input>
          </div>)}
          <div className={register_module_css_1.default.inputbox}>
            <fa_1.FaUser className={register_module_css_1.default.inputicon}></fa_1.FaUser>
            <input onChange={onChange} name="usuario" className={register_module_css_1.default.input} placeholder="Nome de usuário"></input>
          </div>
          <div className={register_module_css_1.default.inputbox}>
            <fa_1.FaLock className={register_module_css_1.default.inputicon}></fa_1.FaLock>
            <input onChange={onChange} name="senha" className={register_module_css_1.default.input} placeholder={login ? "Sua senha " : "Crie uma senha"}></input>
          </div>
          <button onClick={onClick} className={register_module_css_1.default.botao1}>{login ? "Entrar" : "Inscrever-se"}</button>
        </div>
      </div>
      <div className={register_module_css_1.default.perguntas}>
        {login ?
            <p className={register_module_css_1.default.pergunta1}>
          Você quer se registrar?{" "}
          <span onClick={switchLogin} className={`${register_module_css_1.default.span1} ${register_module_css_1.default.switchlogin}`}>Clique aqui</span> para voltar
        </p> :
            <p className={register_module_css_1.default.pergunta1}>
          Você já possui uma conta?{" "}
          <span onClick={switchLogin} className={`${register_module_css_1.default.span1} ${register_module_css_1.default.switchlogin}`}>Clique aqui</span> para entrar
        </p>}
      </div>
    </div>);
}
exports.default = Register;
//# sourceMappingURL=Register.js.map