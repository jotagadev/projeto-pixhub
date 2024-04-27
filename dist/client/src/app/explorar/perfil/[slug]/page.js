"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PhotosGallery_1 = require("@/components/PhotosGallery/PhotosGallery");
const page_module_css_1 = require("./page.module.css");
const fa6_1 = require("react-icons/fa6");
const io_1 = require("react-icons/io");
const navigation_1 = require("next/navigation");
const link_1 = require("next/link");
function Perfil() {
    const router = (0, navigation_1.useRouter)();
    const searchParams = (0, navigation_1.useSearchParams)();
    const params = (0, navigation_1.useParams)();
    const query = searchParams.get("q");
    if (query != "galeria" && query != "config") {
        router.replace(`/explorar/perfil/${params.slug}?q=galeria`);
    }
    return (<div className={page_module_css_1.default.container}>
      <img className={page_module_css_1.default.avatar} src="/images/messi.jpeg"></img>
      <div className={page_module_css_1.default.nomeeconfig}>
        <h1 className={page_module_css_1.default.nome}>Lionel Messi</h1>
        <div className={page_module_css_1.default.icons}>
          <link_1.default href="?q=galeria"><io_1.IoMdPhotos className={`${page_module_css_1.default.configicon} ${query == "galeria" && page_module_css_1.default.active}`}/></link_1.default>
          <link_1.default href="?q=config"><fa6_1.FaGear className={`${page_module_css_1.default.configicon} ${query == "config" && page_module_css_1.default.active}`}/></link_1.default>
        </div>
      </div>
      {query == "galeria" && <PhotosGallery_1.default api="https://jsonplaceholder.typicode.com/photos?albumId=1"></PhotosGallery_1.default>}
      {query == "config"}

    </div>);
}
exports.default = Perfil;
//# sourceMappingURL=page.js.map