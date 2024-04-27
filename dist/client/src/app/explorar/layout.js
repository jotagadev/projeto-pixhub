"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const ExploreNavbar_1 = require("@/components/ExploreNavbar/ExploreNavbar");
const HomeFooter_1 = require("@/components/HomeFooter/HomeFooter");
exports.metadata = {
    title: "PixHub - Explorar",
    description: "Hora de explorar a criatividade do mundo!",
};
function RootLayout({ children, }) {
    return (<>
      <ExploreNavbar_1.default />
  
        {children}
      
      <HomeFooter_1.default></HomeFooter_1.default>
    </>);
}
exports.default = RootLayout;
//# sourceMappingURL=layout.js.map