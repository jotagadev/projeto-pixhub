import { Photo } from 'src/modules/photos/entities/photos.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'user', orderBy: { id: 'ASC' } })
export class User {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 255,
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 255,
    nullable: false,
    select: false,
  })
  password: string;

  @OneToMany(() => Photo, (photo) => photo.user, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  photos: Photo[];
}
