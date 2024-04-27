"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const photosgallery_module_css_1 = require("./photosgallery.module.css");
function PhotosGallery({ api }) {
    const [photos, setPhotos] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const getPosts = async () => {
            try {
                const response = await fetch(api);
                if (!response.ok) {
                    throw new Error("Erro ao buscar os dados das fotos");
                }
                const json = await response.json();
                const limitedPhotos = json.slice(0, 100);
                setPhotos(limitedPhotos);
            }
            catch (error) {
                console.error("Erro ao buscar os dados das fotos:", error);
            }
        };
        getPosts();
    }, []);
    console.log(photos);
    return (<div className={photosgallery_module_css_1.default.container}>
      {photos.map((photo) => (<div className={photosgallery_module_css_1.default.divphoto} key={photo.id}>
          <img className={photosgallery_module_css_1.default.img} src={photo.url} alt={photo.title}/>
        </div>))}
    </div>);
}
exports.default = PhotosGallery;
//# sourceMappingURL=PhotosGallery.js.map