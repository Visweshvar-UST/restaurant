import {
    Column,
    Entity, 
    PrimaryGeneratedColumn 
} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:  number;

    @Column()
    dishname: String;

    @Column({unique : true})
    type: String;

    @Column({unique : true})
    price: number;
    
}
