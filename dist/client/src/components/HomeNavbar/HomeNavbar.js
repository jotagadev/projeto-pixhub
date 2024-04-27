"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = require("next/link");
const Logo_1 = require("../Logo/Logo");
const HomeNavbar_module_css_1 = require("./HomeNavbar.module.css");
const fa_1 = require("react-icons/fa");
const fa6_1 = require("react-icons/fa6");
const react_1 = require("react");
const RegisterDialog_1 = require("../RegisterDialog/RegisterDialog");
function HomeNavbar() {
    const [mobile, setMobile] = (0, react_1.useState)(false);
    const [loginOption, setLoginOption] = (0, react_1.useState)(false);
    const dialogRef = (0, react_1.useRef)(null);
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
      <dialog className={HomeNavbar_module_css_1.default.dialog} ref={dialogRef}>
        <RegisterDialog_1.default option={loginOption} closeDialog={closeDialog}></RegisterDialog_1.default>
      </dialog>
      <header className={HomeNavbar_module_css_1.default.container}>
        <Logo_1.default></Logo_1.default>
        <link_1.default className={HomeNavbar_module_css_1.default.explorarbtn} href="/explorar">
          Explorar
        </link_1.default>

        <div className={HomeNavbar_module_css_1.default.containerauth}>
          <button className={HomeNavbar_module_css_1.default.loginbtn} onClick={() => toggleDialog(true)}>
            Login
          </button>
          <button className={HomeNavbar_module_css_1.default.registerbtn} onClick={() => toggleDialog(false)}>
            Registrar-se
          </button>
        </div>
        <label className={HomeNavbar_module_css_1.default.menu} onClick={onClick}>
          {mobile ? <fa6_1.FaX></fa6_1.FaX> : <fa_1.FaBars></fa_1.FaBars>}
        </label>
        <div className={mobile ? `${HomeNavbar_module_css_1.default.mobilenav} ${HomeNavbar_module_css_1.default.show}` : HomeNavbar_module_css_1.default.mobilenav}>
          <link_1.default className={HomeNavbar_module_css_1.default.registerbtn} href="/explorar">
            Explorar
          </link_1.default>
          <div className={HomeNavbar_module_css_1.default.mobileauth}>
            <button className={HomeNavbar_module_css_1.default.loginbtn} onClick={() => toggleDialog(true)}>
              Login
            </button>
            <button className={HomeNavbar_module_css_1.default.registerbtn} onClick={() => toggleDialog(false)}>
              Registrar-se
            </button>
          </div>
        </div>
      </header>
    </>);
}
exports.default = HomeNavbar;
//# sourceMappingURL=HomeNavbar.js.map