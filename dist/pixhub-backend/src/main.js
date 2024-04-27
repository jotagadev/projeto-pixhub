"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: false }));
    app.enableCors();
    const port = app.get(config_1.ConfigService).get('PORT') || 3333;
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map