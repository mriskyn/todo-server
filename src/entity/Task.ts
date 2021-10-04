import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  ManyToOne,
} from 'typeorm';
import {User} from "./User";


@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  isCompleted: boolean;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @ManyToOne(() => User, user => user.tasks)
  user: User;

  @BeforeInsert()
  initiateDate() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
    
    this.isCompleted = false;
  }

  @BeforeUpdate()
  async updateTime() {
    this.updatedAt = new Date();
  }
}
