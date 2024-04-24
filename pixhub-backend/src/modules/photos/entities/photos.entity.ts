import { User } from 'src/modules/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'photo', orderBy: { id: 'ASC' } })
export class Photo {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'varchar', length: 255, name: 'title', nullable: false })
  title: string;

  @Column({ type: 'datetime', length: 255, name: 'date', nullable: false })
  postDate: Date;

  @Column({ type: 'text', name: 'photoURL', nullable: false })
  photoURL: string;

  @Column({ type: 'text', name: 'description', nullable: false })
  description: string;

  @Column({ type: 'varchar', length: 50, name: 'category', nullable: false })
  category: string;

  @Column({ type: 'int', name: 'userId', nullable: false })
  userId: number;

  @ManyToOne(() => User, (user) => user.photos, { onDelete: 'CASCADE' })
  user: User;
}
