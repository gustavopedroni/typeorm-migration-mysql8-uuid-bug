import { Entity, Generated, PrimaryColumn } from "typeorm";

@Entity()
export class MyEntity {
  @PrimaryColumn('uuid', {
    default: () => '(uuid())',
  })
  @Generated('uuid')
  id: string
}