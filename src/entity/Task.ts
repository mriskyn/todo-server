import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

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
