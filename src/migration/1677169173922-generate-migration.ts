import { MigrationInterface, QueryRunner } from "typeorm";

export class generateMigration1677169173922 implements MigrationInterface {
    name = 'generateMigration1677169173922'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`user_name\` varchar(20) NOT NULL, \`password\` text NOT NULL, \`full_name\` varchar(255) NOT NULL, \`email\` varchar(50) NOT NULL, \`phone\` varchar(12) NULL, \`gender\` enum ('male', 'female') NULL, \`birthday\` date NULL, \`avatar\` varchar(255) NULL, \`address\` varchar(255) NULL, \`status\` enum ('normal', 'vip') NOT NULL DEFAULT 'normal', \`expired_status\` date NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, UNIQUE INDEX \`IDX_d34106f8ec1ebaf66f4f8609dd\` (\`user_name\`), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), UNIQUE INDEX \`IDX_8e1f623798118e629b46a9e629\` (\`phone\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`actor\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(30) NOT NULL, \`slug\` varchar(255) NOT NULL, \`gender\` enum ('male', 'female') NULL, \`birthday\` date NULL, \`avatar\` varchar(255) NULL, \`address\` varchar(255) NULL, \`descriptions\` text NULL, \`viewer\` int NOT NULL DEFAULT '0', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`category\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(50) NOT NULL, \`slug\` varchar(255) NOT NULL, \`parent_id\` int NOT NULL DEFAULT '0', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`movie\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`slug\` varchar(255) NOT NULL, \`name_en\` varchar(255) NULL, \`country\` varchar(255) NOT NULL, \`descriptions\` text NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`movie_episode\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`videos\` text NOT NULL, \`requireVip\` tinyint NOT NULL DEFAULT 0, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`movieId\` int NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`date_view\` (\`date\` date NOT NULL, PRIMARY KEY (\`date\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`movie_to_date_view\` (\`id\` int NOT NULL AUTO_INCREMENT, \`viewer\` int NOT NULL DEFAULT '0', \`movieId\` int NULL, \`dateViewDate\` date NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`movie_to_users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`rate\` int NOT NULL DEFAULT '0', \`movieId\` int NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`movie_categories_category\` (\`movieId\` int NOT NULL, \`categoryId\` int NOT NULL, INDEX \`IDX_0d43cf9426be5b4db28f207179\` (\`movieId\`), INDEX \`IDX_32d9eb1bb6f1e2bee2411b7226\` (\`categoryId\`), PRIMARY KEY (\`movieId\`, \`categoryId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`movie_actors_actor\` (\`movieId\` int NOT NULL, \`actorId\` int NOT NULL, INDEX \`IDX_992f9af300d8c96c46fea4e541\` (\`movieId\`), INDEX \`IDX_65be8ded67af2677acfd19854c\` (\`actorId\`), PRIMARY KEY (\`movieId\`, \`actorId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`movie_episode\` ADD CONSTRAINT \`FK_0f057c8dac856933e15fedf0391\` FOREIGN KEY (\`movieId\`) REFERENCES \`movie\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`movie_episode\` ADD CONSTRAINT \`FK_6ad95feaca0420123c3a2664d67\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`movie_to_date_view\` ADD CONSTRAINT \`FK_d60c2f4600d97c2865165ed36c2\` FOREIGN KEY (\`movieId\`) REFERENCES \`movie\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`movie_to_date_view\` ADD CONSTRAINT \`FK_9b9903fd41ab2377ad45ae9ab22\` FOREIGN KEY (\`dateViewDate\`) REFERENCES \`date_view\`(\`date\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`movie_to_users\` ADD CONSTRAINT \`FK_41eb993875d474b3aba48a53450\` FOREIGN KEY (\`movieId\`) REFERENCES \`movie\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`movie_to_users\` ADD CONSTRAINT \`FK_f182005fa6b8e4fbfbbdf45310a\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`movie_categories_category\` ADD CONSTRAINT \`FK_0d43cf9426be5b4db28f2071794\` FOREIGN KEY (\`movieId\`) REFERENCES \`movie\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`movie_categories_category\` ADD CONSTRAINT \`FK_32d9eb1bb6f1e2bee2411b7226c\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`movie_actors_actor\` ADD CONSTRAINT \`FK_992f9af300d8c96c46fea4e5419\` FOREIGN KEY (\`movieId\`) REFERENCES \`movie\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`movie_actors_actor\` ADD CONSTRAINT \`FK_65be8ded67af2677acfd19854c2\` FOREIGN KEY (\`actorId\`) REFERENCES \`actor\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`movie_actors_actor\` DROP FOREIGN KEY \`FK_65be8ded67af2677acfd19854c2\``);
        await queryRunner.query(`ALTER TABLE \`movie_actors_actor\` DROP FOREIGN KEY \`FK_992f9af300d8c96c46fea4e5419\``);
        await queryRunner.query(`ALTER TABLE \`movie_categories_category\` DROP FOREIGN KEY \`FK_32d9eb1bb6f1e2bee2411b7226c\``);
        await queryRunner.query(`ALTER TABLE \`movie_categories_category\` DROP FOREIGN KEY \`FK_0d43cf9426be5b4db28f2071794\``);
        await queryRunner.query(`ALTER TABLE \`movie_to_users\` DROP FOREIGN KEY \`FK_f182005fa6b8e4fbfbbdf45310a\``);
        await queryRunner.query(`ALTER TABLE \`movie_to_users\` DROP FOREIGN KEY \`FK_41eb993875d474b3aba48a53450\``);
        await queryRunner.query(`ALTER TABLE \`movie_to_date_view\` DROP FOREIGN KEY \`FK_9b9903fd41ab2377ad45ae9ab22\``);
        await queryRunner.query(`ALTER TABLE \`movie_to_date_view\` DROP FOREIGN KEY \`FK_d60c2f4600d97c2865165ed36c2\``);
        await queryRunner.query(`ALTER TABLE \`movie_episode\` DROP FOREIGN KEY \`FK_6ad95feaca0420123c3a2664d67\``);
        await queryRunner.query(`ALTER TABLE \`movie_episode\` DROP FOREIGN KEY \`FK_0f057c8dac856933e15fedf0391\``);
        await queryRunner.query(`DROP INDEX \`IDX_65be8ded67af2677acfd19854c\` ON \`movie_actors_actor\``);
        await queryRunner.query(`DROP INDEX \`IDX_992f9af300d8c96c46fea4e541\` ON \`movie_actors_actor\``);
        await queryRunner.query(`DROP TABLE \`movie_actors_actor\``);
        await queryRunner.query(`DROP INDEX \`IDX_32d9eb1bb6f1e2bee2411b7226\` ON \`movie_categories_category\``);
        await queryRunner.query(`DROP INDEX \`IDX_0d43cf9426be5b4db28f207179\` ON \`movie_categories_category\``);
        await queryRunner.query(`DROP TABLE \`movie_categories_category\``);
        await queryRunner.query(`DROP TABLE \`movie_to_users\``);
        await queryRunner.query(`DROP TABLE \`movie_to_date_view\``);
        await queryRunner.query(`DROP TABLE \`date_view\``);
        await queryRunner.query(`DROP TABLE \`movie_episode\``);
        await queryRunner.query(`DROP TABLE \`movie\``);
        await queryRunner.query(`DROP TABLE \`category\``);
        await queryRunner.query(`DROP TABLE \`actor\``);
        await queryRunner.query(`DROP INDEX \`IDX_8e1f623798118e629b46a9e629\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_d34106f8ec1ebaf66f4f8609dd\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
