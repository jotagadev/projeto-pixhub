"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Photo = void 0;
const user_entity_1 = require("src/modules/user/entities/user.entity");
const typeorm_1 = require("typeorm");
let Photo = class Photo {
};
exports.Photo = Photo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], Photo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, name: 'title', nullable: false }),
    __metadata("design:type", String)
], Photo.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', name: 'date', nullable: false }),
    __metadata("design:type", Date)
], Photo.prototype, "postDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', name: 'photoURL', nullable: true }),
    __metadata("design:type", String)
], Photo.prototype, "photoURL", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', name: 'description', nullable: false }),
    __metadata("design:type", String)
], Photo.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, name: 'category', nullable: false }),
    __metadata("design:type", String)
], Photo.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'userId', nullable: false }),
    __metadata("design:type", Number)
], Photo.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.photos, { onDelete: 'CASCADE' }),
    __metadata("design:type", typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object)
], Photo.prototype, "user", void 0);
exports.Photo = Photo = __decorate([
    (0, typeorm_1.Entity)({ name: 'photo', orderBy: { id: 'ASC' } })
], Photo);
//# sourceMappingURL=photos.entity.js.map