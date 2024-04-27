"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = require("next/link");
const Logo_1 = require("../Logo/Logo");
const ExploreNavbar_module_css_1 = require("./ExploreNavbar.module.css");
const fa_1 = require("react-icons/fa");
const fa6_1 = require("react-icons/fa6");
const react_1 = require("react");
const RegisterDialog_1 = require("../RegisterDialog/RegisterDialog");
const sl_1 = require("react-icons/sl");
const navigation_1 = require("next/navigation");
const io_1 = require("react-icons/io");
function ExploreNavbar() {
    const [avatarDrop, setAvatarDrop] = (0, react_1.useState)(false);
    const [logged, setLogged] = (0, react_1.useState)(true);
    const [mobile, setMobile] = (0, react_1.useState)(false);
    const [loginOption, setLoginOption] = (0, react_1.useState)(false);
    const [search, setSearch] = (0, react_1.useState)("");
    const dialogRef = (0, react_1.useRef)(null);
    const pathname = (0, navigation_1.usePathname)();
    const explorarAtivo = pathname.endsWith("/explorar");
    const criarAtivo = pathname.endsWith("/criar");
    const onClick = () => {
        setMobile((prev) => !prev);
    };
    const toggleDialog = (option) => {
        if (!dialogRef.current) {
            return;
        }
        setLoginOption(option);
        setTimeout(() => {
            if (dialogRef.current instanceof HTMLDialogElement) {
                if (dialogRef.current.hasAttribute("open")) {
                    dialogRef.current.close();
                }
                else {
                    dialogRef.current.showModal();
                }
            }
        }, 0);
    };
    const closeDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };
    return (<>
      <dialog className={ExploreNavbar_module_css_1.default.dialog} ref={dialogRef}>
        <RegisterDialog_1.default option={loginOption} closeDialog={closeDialog}></RegisterDialog_1.default>
      </dialog>
      <header className={ExploreNavbar_module_css_1.default.container}>
        <div className={ExploreNavbar_module_css_1.default.logoelinks}>
          <link_1.default href="/explorar">
            <Logo_1.default></Logo_1.default>
          </link_1.default>
          <link_1.default className={`${ExploreNavbar_module_css_1.default.navbtn} ${explorarAtivo && ExploreNavbar_module_css_1.default.navbtnselected}`} href="/explorar">
            Página inicial
          </link_1.default>
          {logged && (<link_1.default className={`${ExploreNavbar_module_css_1.default.navbtn} ${criarAtivo && ExploreNavbar_module_css_1.default.navbtnselected}`} href="/explorar/criar">
              Criar
            </link_1.default>)}
        </div>
        {explorarAtivo && (<div className={ExploreNavbar_module_css_1.default.search}>
            <input placeholder="Pesquisar" onChange={(e) => setSearch(e.target.value)} className={ExploreNavbar_module_css_1.default.searchinput}></input>
            <button className={ExploreNavbar_module_css_1.default.searchbtn}>
              <sl_1.SlMagnifier />
            </button>
          </div>)}

        <>
          {!logged && (<div className={ExploreNavbar_module_css_1.default.containerauth}>
              <button className={ExploreNavbar_module_css_1.default.loginbtn} onClick={() => toggleDialog(true)}>
                Login
              </button>
              <button className={ExploreNavbar_module_css_1.default.registerbtn} onClick={() => toggleDialog(false)}>
                Registrar-se
              </button>
            </div>)}

          {<label className={ExploreNavbar_module_css_1.default.menu} onClick={onClick}>
              {mobile ? <fa6_1.FaX></fa6_1.FaX> : <fa_1.FaBars></fa_1.FaBars>}
            </label>}

          <div className={mobile ? `${ExploreNavbar_module_css_1.default.mobilenav} ${ExploreNavbar_module_css_1.default.show}` : ExploreNavbar_module_css_1.default.mobilenav}>
            {explorarAtivo && (<div className={ExploreNavbar_module_css_1.default.searchmobile}>
                <input placeholder="Pesquisar" onChange={(e) => setSearch(e.target.value)} className={ExploreNavbar_module_css_1.default.searchinput}></input>
                <button className={ExploreNavbar_module_css_1.default.searchbtn}>
                  <sl_1.SlMagnifier />
                </button>
              </div>)}

            <div className={ExploreNavbar_module_css_1.default.mobilenavlinks}>
              <link_1.default className={`${ExploreNavbar_module_css_1.default.navbtn} ${explorarAtivo && ExploreNavbar_module_css_1.default.navbtnselected}`} href="/explorar">
                Página inicial
              </link_1.default>
              {logged && (<link_1.default className={`${ExploreNavbar_module_css_1.default.navbtn} ${criarAtivo && ExploreNavbar_module_css_1.default.navbtnselected}`} href="/explorar/criar">
                  Criar
                </link_1.default>)}
            </div>

            {!logged && (<div className={ExploreNavbar_module_css_1.default.mobileauth}>
                <button className={ExploreNavbar_module_css_1.default.loginbtn} onClick={() => toggleDialog(true)}>
                  Login
                </button>
                <button className={ExploreNavbar_module_css_1.default.registerbtn} onClick={() => toggleDialog(false)}>
                  Registrar-se
                </button>
              </div>)}
          </div>
        </>

        {logged && (<div className={ExploreNavbar_module_css_1.default.containerperfil}>
            <div className={ExploreNavbar_module_css_1.default.perfil}>
              <link_1.default href="/explorar/perfil/1">
                <img className={ExploreNavbar_module_css_1.default.avatarimg} src="/images/messi.jpeg"></img>
              </link_1.default>
              <io_1.IoIosArrowDown onClick={() => setAvatarDrop(!avatarDrop)} className={`${ExploreNavbar_module_css_1.default.dropicon} ${avatarDrop && ExploreNavbar_module_css_1.default.dropiconshow}`}/>
            </div>
            <div className={`${ExploreNavbar_module_css_1.default.dropdowncontainer} ${avatarDrop && ExploreNavbar_module_css_1.default.dropshow}`}>
              <ul className={ExploreNavbar_module_css_1.default.dropdownmenu}>
                <li>Exibir perfil</li>
                <li>Configurações</li>
                <li>Sair</li>
              </ul>
            </div>
          </div>)}
      </header>
    </>);
}
exports.default = ExploreNavbar;
//# sourceMappingURL=ExploreNavbar.js.map