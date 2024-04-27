"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HomeNavbar_1 = require("@/components/HomeNavbar/HomeNavbar");
const page_module_css_1 = require("./page.module.css");
const Register_1 = require("@/components/Register/Register");
const RegisterSlogan_1 = require("@/components/RegisterSlogan/RegisterSlogan");
const HomeSlider_1 = require("@/components/HomeSlider/HomeSlider");
const fa_1 = require("react-icons/fa");
const image_1 = require("next/image");
const HomeFooter_1 = require("@/components/HomeFooter/HomeFooter");
function Home() {
    return (<>
      <HomeNavbar_1.default></HomeNavbar_1.default>
      <main className={page_module_css_1.default.container}>
        <dialog>
          <Register_1.default></Register_1.default>
        </dialog>
        <section className={page_module_css_1.default.section_slogan}>
          <div className={page_module_css_1.default.slogan}>
            <h1 className={page_module_css_1.default.slogantext}>
              Explore todas as formas de arte
            </h1>
            <h2 className={page_module_css_1.default.slogan_subt}>Veja, se inspire, crie</h2>
          </div>

          <HomeSlider_1.default></HomeSlider_1.default>
          <a href="#portfolio">
          <button className={page_module_css_1.default.downbtn}>
            <fa_1.FaArrowDown></fa_1.FaArrowDown>
          </button>
          </a>
          <aside className={page_module_css_1.default.span1}>
            <p className={page_module_css_1.default.visitante}>entrar como visitante</p>
          </aside>
        </section>

        <section id="portfolio" className={page_module_css_1.default.section_portfolio}>
          <div className={page_module_css_1.default.port_imagem}>
            <image_1.default alt="Homem mexendo em arquivo" width={700} height={700} unoptimized src="/gif/research.gif"></image_1.default>
          </div>
          <div className={page_module_css_1.default.port_content}>
            <h1 className={page_module_css_1.default.port_h1}>
              Toda a sua criação <span className={page_module_css_1.default.port_destaque}>em um só lugar</span>
            </h1>
            <p className={page_module_css_1.default.port_subt}>Use como seu portfolio, como seu perfil artístico, como um lugar pra chamar de seu. Aqui, você decide.</p>
          </div>
        </section>

        <section className={page_module_css_1.default.section_ideas}>
          <div className={page_module_css_1.default.ideas_imagem}>
            <image_1.default alt="Homem tendo ideias" width={700} height={700} unoptimized src="/gif/ideas.gif"></image_1.default>
          </div>
          <div className={page_module_css_1.default.ideas_content}>
            <h1 className={page_module_css_1.default.ideas_h1}>
              Explore novas ideias<span className={page_module_css_1.default.ideas_destaque}> e se inspire</span>
            </h1>
            <p className={page_module_css_1.default.ideas_subt}>Explore as ideias das outras pessoas, se inspire e contribua para a comunidade. Juntos, somos mais criativos!</p>
          </div>
        </section>

        <section className={page_module_css_1.default.section_register}>
          <div className={page_module_css_1.default.section_register_left}>
            <RegisterSlogan_1.default></RegisterSlogan_1.default>
          </div>

          <div className={page_module_css_1.default.section_register_right}>
            <Register_1.default></Register_1.default>
          </div>
        </section>
        <footer>
          <HomeFooter_1.default></HomeFooter_1.default>
        </footer>
      </main>
    </>);
}
exports.default = Home;
//# sourceMappingURL=page.js.map