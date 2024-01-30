import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Contact } from "./Contact";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];
}
