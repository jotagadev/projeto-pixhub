"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = require("next/image");
const loading_module_css_1 = require("./loading.module.css");
function Loading() {
    <div className={loading_module_css_1.default.container}>
        <image_1.default alt="animação de carregamento" src="/gif/loading.gif" width={1000} height={1000}></image_1.default>
        <h1 className={loading_module_css_1.default.h1}>Loading</h1>
    </div>;
}
exports.default = Loading;
//# sourceMappingURL=loading.js.map