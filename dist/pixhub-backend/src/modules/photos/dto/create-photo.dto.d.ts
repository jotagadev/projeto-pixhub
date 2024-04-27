import { Category } from 'src/common/enum/Category.enum';
export declare class CreatePhotoDto {
    title: string;
    postDate: Date;
    description: string;
    category: Category;
    userId: number;
}
