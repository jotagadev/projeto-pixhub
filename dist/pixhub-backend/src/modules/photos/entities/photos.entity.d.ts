import { User } from 'src/modules/user/entities/user.entity';
export declare class Photo {
    id: number;
    title: string;
    postDate: Date;
    photoURL: string;
    description: string;
    category: string;
    userId: number;
    user: User;
}
