import { MigrationInterface, QueryRunner } from "typeorm";

export class Third1701446975152 implements MigrationInterface {
    name = 'Third1701446975152'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`my_entity\` CHANGE \`id\` \`id\` varchar(36) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`my_entity\` CHANGE \`id\` \`id\` varchar(36) NOT NULL DEFAULT 'uuid()'`);
    }

}
