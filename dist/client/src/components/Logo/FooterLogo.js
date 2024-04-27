"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const footerlogo_module_css_1 = require("./footerlogo.module.css");
const google_1 = require("next/font/google");
const league = (0, google_1.League_Spartan)({ subsets: ['latin'] });
function FooterLogo() {
    return (<div className={league.className}>
    <div className={footerlogo_module_css_1.default.container}>
      <h1 className={footerlogo_module_css_1.default.titulo1}>Pix</h1>
      <h1 className={footerlogo_module_css_1.default.titulo2}>hub</h1>
    </div>
    </div>);
}
exports.default = FooterLogo;
//# sourceMappingURL=FooterLogo.js.map