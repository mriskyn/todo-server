import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  BeforeInsert,
} from 'typeorm';

import {genSalt, hash} from 'bcrypt'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  username: string;

  @Column({})
  password: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @BeforeInsert()
  async hashPassword() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
    
    const salt = await genSalt(Math.floor(Math.random() * 10))
    const hashPassword = await hash(this.password, salt)

    this.password = hashPassword
  }
}
