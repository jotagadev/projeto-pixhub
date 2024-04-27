"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RegisterLogo_1 = require("@/components/Logo/RegisterLogo");
const notfound_module_css_1 = require("./notfound.module.css");
const bi_1 = require("react-icons/bi");
const fa_1 = require("react-icons/fa");
const navigation_1 = require("next/navigation");
function NotFound() {
    const router = (0, navigation_1.useRouter)();
    const handleClick = () => {
        router.replace('/');
    };
    return (<div className={notfound_module_css_1.default.container}>
            <div className={notfound_module_css_1.default.logo}>
            <RegisterLogo_1.default></RegisterLogo_1.default>
            </div>
            <div className={notfound_module_css_1.default.content}>
            <h1 className={notfound_module_css_1.default.contenth1}><bi_1.BiSolidCommentError /><br></br><br></br>Essa página <span className={notfound_module_css_1.default.destaque}>não existe</span></h1>
            <button onClick={handleClick} className={notfound_module_css_1.default.backbtn}><fa_1.FaSignOutAlt /> Voltar à página principal</button>
            </div>
       </div>);
}
exports.default = NotFound;
//# sourceMappingURL=not-found.js.map