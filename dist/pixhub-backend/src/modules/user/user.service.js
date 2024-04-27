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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createUserDto) {
        await this.emailExists(createUserDto.email);
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(createUserDto.password, salt);
        createUserDto.password = hash;
        const user = await this.userRepository.save(createUserDto);
        delete user.password;
        return user;
    }
    async findAll() {
        return await this.userRepository.find({
            select: ['id', 'name', 'email', 'password'],
        });
    }
    async findOne(id) {
        try {
            return await this.userRepository.findOneByOrFail({ id });
        }
        catch (error) {
            throw new common_1.NotFoundException('Usuário não encontrado.');
        }
    }
    async findByEmail(email) {
        return await this.userRepository.findOne({
            where: { email },
            select: ['id', 'name', 'email', 'password', 'photos'],
        });
    }
    async update(id, updateUserDto) {
        const user = await this.findOne(id);
        if (updateUserDto.email && user.email != updateUserDto.email) {
            await this.emailExists(updateUserDto.email);
        }
        if (updateUserDto.password) {
            const salt = await bcrypt.genSalt();
            const hash = await bcrypt.hash(updateUserDto.password, salt);
            updateUserDto.password = hash;
        }
        return await this.userRepository.update(id, updateUserDto);
    }
    async remove(id) {
        await this.findOne(id);
        return await this.userRepository.delete(id);
    }
    async emailExists(email) {
        const user = await this.userRepository.findOne({ where: { email } });
        if (user) {
            throw new common_1.BadRequestException('Email já existe.');
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map