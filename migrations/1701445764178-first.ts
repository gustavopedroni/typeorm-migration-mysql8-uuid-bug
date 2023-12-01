import { MigrationInterface, QueryRunner } from "typeorm";

export class First1701445764178 implements MigrationInterface {
    name = 'First1701445764178'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`my_entity\` (\`id\` varchar(36) NOT NULL DEFAULT (uuid()), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`my_entity\``);
    }

}
