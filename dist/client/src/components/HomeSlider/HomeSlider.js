"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const homeslider_module_css_1 = require("./homeslider.module.css");
const react_1 = require("swiper/react");
require("swiper/css");
require("swiper/css/effect-coverflow");
require("swiper/css/pagination");
require("swiper/css/navigation");
const modules_1 = require("swiper/modules");
const image_1 = require("next/image");
const images = [
    "/slider/1.png",
    "/slider/2.png",
    "/slider/3.jpg",
    "/slider/4.png",
    "/slider/6.jpg",
    "/slider/5.jpg"
];
function HomeSlider() {
    return (<div className={homeslider_module_css_1.default.container}>
      <react_1.Swiper grabCursor={true} effect={'coverflow'} centeredSlides={true} slidesPerView={5} autoplay={{
            delay: 5000
        }} loop={true} modules={[modules_1.EffectCoverflow, modules_1.Autoplay]} coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5
        }} className="swiper-container">
        {images.map((image) => (<react_1.SwiperSlide key={image}><image_1.default className={homeslider_module_css_1.default.imagem} width={500} height={500} alt="Foto de representação" src={image}/></react_1.SwiperSlide>))}
        
        
        ...
      </react_1.Swiper>
    </div>);
}
exports.default = HomeSlider;
//# sourceMappingURL=HomeSlider.js.map