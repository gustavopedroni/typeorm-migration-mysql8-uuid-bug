import path from 'path'
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { MyEntity } from '~/src/my-entity'

export default new DataSource({
  type: 'mysql',
  host: 'db',
  database: 'test',
  password: 'dev',
  username: 'root',
  entities: [MyEntity],
  migrations: [
    path.resolve(__dirname, '../migrations/**{.ts,.js}')
  ]
})