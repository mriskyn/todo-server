import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Task {
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

}