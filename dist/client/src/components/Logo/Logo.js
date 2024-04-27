"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logo_module_css_1 = require("./logo.module.css");
const google_1 = require("next/font/google");
const league = (0, google_1.League_Spartan)({ subsets: ['latin'] });
function Logo() {
    return (<div className={league.className}>
    <div className={logo_module_css_1.default.container}>
      <h1 className={logo_module_css_1.default.titulo1}>Pix</h1>
      <h1 className={logo_module_css_1.default.titulo2}>hub</h1>
    </div>
    </div>);
}
exports.default = Logo;
//# sourceMappingURL=Logo.js.map