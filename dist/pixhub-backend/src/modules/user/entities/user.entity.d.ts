import { Photo } from 'src/modules/photos/entities/photos.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    photos: Photo[];
}
