import { Entity, Generated, PrimaryColumn } from "typeorm";

@Entity()
export class MyEntity {
  @PrimaryColumn('uuid', {
    // COMMENT THIS LINE TO MAKE IT WORK
    default: () => '(uuid())',
  })
  @Generated('uuid')
  id: string
}