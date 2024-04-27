"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PhotosGallery_1 = require("@/components/PhotosGallery/PhotosGallery");
const page_module_css_1 = require("./page.module.css");
const fa_1 = require("react-icons/fa");
const fa6_1 = require("react-icons/fa6");
const md_1 = require("react-icons/md");
const pi_1 = require("react-icons/pi");
const si_1 = require("react-icons/si");
function Explorar() {
    const api = "https://jsonplaceholder.typicode.com/photos";
    return (<div className={page_module_css_1.default.container}>
      <h1 className={page_module_css_1.default.slogan}>Explore novos horizontes</h1>
      <div className={page_module_css_1.default.cats}>
        
        <button className={page_module_css_1.default.cat}>
          <fa_1.FaPaintBrush />
          <p>Arte</p>
        </button>
        
        <button className={page_module_css_1.default.cat}>
          <fa6_1.FaSun />
          <p>Natureza</p>
        </button>
        <button className={page_module_css_1.default.cat}>
          <fa_1.FaBuilding />
          <p>Urbano</p>
        </button>
        <button className={page_module_css_1.default.cat}>
          <pi_1.PiSwordDuotone />
          <p>Anime</p>
        </button>
        <button className={page_module_css_1.default.cat}>
          <md_1.MdVideogameAsset />
          <p>Jogos</p>
        </button>
        <button className={page_module_css_1.default.cat}>
          <si_1.SiRetroarch />
          <p>Pixel art</p>
        </button>
      </div>
      <PhotosGallery_1.default api={api}></PhotosGallery_1.default>
    </div>);
}
exports.default = Explorar;
//# sourceMappingURL=page.js.map