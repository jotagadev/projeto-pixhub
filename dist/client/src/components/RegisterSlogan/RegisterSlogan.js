"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = require("next/image");
const registerslogan_module_css_1 = require("./registerslogan.module.css");
function RegisterSlogan() {
    return (<>
      <image_1.default alt="Animação pessoa criativa" className={registerslogan_module_css_1.default.section_register_gif} src="/gif/creative7.gif" width={500} height={500}></image_1.default>
      <h1 className={registerslogan_module_css_1.default.section_register_left_h1}>
        Mostre a sua{" "}
        <span className={registerslogan_module_css_1.default.spandestaque_color1}>criatividade</span> para o
        mundo.
      </h1>
    </>);
}
exports.default = RegisterSlogan;
//# sourceMappingURL=RegisterSlogan.js.map