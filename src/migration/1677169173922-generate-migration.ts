import { MigrationInterface, QueryRunner } from "typeorm";

export class generateMigration1677169173922 implements MigrationInterface {
    name = 'generateMigration1677169173922'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`user_name\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`gender\` enum ('male', 'female') NULL, \`age\` int(200) NULL, \`avatar\` varchar(255) NULL, \`address\` varchar(255) NULL, \`status\` enum ('normal', 'vip') NOT NULL DEFAULT 'normal', \`expired_status\` date NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, UNIQUE INDEX \`IDX_d34106f8ec1ebaf66f4f8609dd\` (\`user_name\`), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), UNIQUE INDEX \`IDX_8e1f623798118e629b46a9e629\` (\`phone\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_8e1f623798118e629b46a9e629\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_d34106f8ec1ebaf66f4f8609dd\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
