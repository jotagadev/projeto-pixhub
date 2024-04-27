"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const registerlogo_module_css_1 = require("./registerlogo.module.css");
const google_1 = require("next/font/google");
const league = (0, google_1.League_Spartan)({ subsets: ['latin'] });
function RegisterLogo() {
    return (<div className={league.className}>
    <div className={registerlogo_module_css_1.default.container}>
      <h1 className={registerlogo_module_css_1.default.titulo1}>Pix</h1>
      <h1 className={registerlogo_module_css_1.default.titulo2}>hub</h1>
    </div>
    </div>);
}
exports.default = RegisterLogo;
//# sourceMappingURL=RegisterLogo.js.map