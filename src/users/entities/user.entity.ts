import { Column, Entity, PrimaryColumn } from 'typeorm/index';
@Entity()
export class User {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;    
}

