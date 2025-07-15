import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

//this is task entity
@Entity()

export class Task {

      @PrimaryGeneratedColumn()
      id!: number;

      @Column()
      title!: string;

      @Column('text')
      description!: string;

      @Column({default: false})
      isCompleted!: boolean;

      @CreateDateColumn()
      createdAt!: Date;


}