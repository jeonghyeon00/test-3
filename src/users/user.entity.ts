import { Entity, Column, PrimaryColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryColumn('char', { length: 16 })
  uuid: string;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column()
  filename: string;

  @Column('int')
  views: number;

  @Column()
  isPublished: boolean;
}
