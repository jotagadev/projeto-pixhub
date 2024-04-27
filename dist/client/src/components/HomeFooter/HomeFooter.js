"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = require("next/image");
const homefooter_module_css_1 = require("./homefooter.module.css");
const FooterLogo_1 = require("../Logo/FooterLogo");
function HomeFooter() {
    return (<div className={homefooter_module_css_1.default.container}>
            <div className={homefooter_module_css_1.default.logo}>
               <FooterLogo_1.default></FooterLogo_1.default>
               <p className={homefooter_module_css_1.default.madeby}>Projeto direcionado ao processo seletivo da TecnoJr. Feito por André Dutra e João Henrique,
               Sendo André responsável pelo back-end e João Henrique responsável pelo front-end.</p>
            </div>
            
          
                <image_1.default className={homefooter_module_css_1.default.logotecno} alt="logo da tecnojr" src="/logo/tecnologo.webp" width={546} height={113}></image_1.default>
            
        </div>);
}
exports.default = HomeFooter;
//# sourceMappingURL=HomeFooter.js.map