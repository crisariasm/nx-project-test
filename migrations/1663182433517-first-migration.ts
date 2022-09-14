import { MigrationInterface, QueryRunner } from "typeorm";

export class firstMigration1663182433517 implements MigrationInterface {
    name = 'firstMigration1663182433517'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "item_location" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "country" varchar NOT NULL, "State" varchar NOT NULL, "city" varchar NOT NULL, "postalCode" integer NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "item_type" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "initial" boolean NOT NULL, "final" boolean NOT NULL, "annual" boolean NOT NULL, "journal" boolean NOT NULL, "rawMaterial" boolean NOT NULL, "product" boolean NOT NULL, "stock" boolean NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "item" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "code" varchar, "name" varchar NOT NULL, "categoryOfProduct" varchar NOT NULL, "description" varchar NOT NULL, "amount" integer NOT NULL, "price" integer NOT NULL, "date" datetime NOT NULL DEFAULT (datetime('now')), "updateAt" datetime NOT NULL DEFAULT (datetime('now')), "type_id" integer)`);
        await queryRunner.query(`CREATE TABLE "inventory_system_location" ("location_id_1" integer NOT NULL, "location_id_2" integer NOT NULL, PRIMARY KEY ("location_id_1", "location_id_2"))`);
        await queryRunner.query(`CREATE INDEX "IDX_cb5bba8ce32eca46a21d03e961" ON "inventory_system_location" ("location_id_1") `);
        await queryRunner.query(`CREATE INDEX "IDX_e729ab9be32b1f405294c725e5" ON "inventory_system_location" ("location_id_2") `);
        await queryRunner.query(`CREATE TABLE "temporary_item" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "code" varchar, "name" varchar NOT NULL, "categoryOfProduct" varchar NOT NULL, "description" varchar NOT NULL, "amount" integer NOT NULL, "price" integer NOT NULL, "date" datetime NOT NULL DEFAULT (datetime('now')), "updateAt" datetime NOT NULL DEFAULT (datetime('now')), "type_id" integer, CONSTRAINT "FK_64cde7db02a99c28d4b67efb367" FOREIGN KEY ("type_id") REFERENCES "item_type" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_item"("id", "code", "name", "categoryOfProduct", "description", "amount", "price", "date", "updateAt", "type_id") SELECT "id", "code", "name", "categoryOfProduct", "description", "amount", "price", "date", "updateAt", "type_id" FROM "item"`);
        await queryRunner.query(`DROP TABLE "item"`);
        await queryRunner.query(`ALTER TABLE "temporary_item" RENAME TO "item"`);
        await queryRunner.query(`DROP INDEX "IDX_cb5bba8ce32eca46a21d03e961"`);
        await queryRunner.query(`DROP INDEX "IDX_e729ab9be32b1f405294c725e5"`);
        await queryRunner.query(`CREATE TABLE "temporary_inventory_system_location" ("location_id_1" integer NOT NULL, "location_id_2" integer NOT NULL, CONSTRAINT "FK_cb5bba8ce32eca46a21d03e9619" FOREIGN KEY ("location_id_1") REFERENCES "item" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_e729ab9be32b1f405294c725e5a" FOREIGN KEY ("location_id_2") REFERENCES "item_location" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, PRIMARY KEY ("location_id_1", "location_id_2"))`);
        await queryRunner.query(`INSERT INTO "temporary_inventory_system_location"("location_id_1", "location_id_2") SELECT "location_id_1", "location_id_2" FROM "inventory_system_location"`);
        await queryRunner.query(`DROP TABLE "inventory_system_location"`);
        await queryRunner.query(`ALTER TABLE "temporary_inventory_system_location" RENAME TO "inventory_system_location"`);
        await queryRunner.query(`CREATE INDEX "IDX_cb5bba8ce32eca46a21d03e961" ON "inventory_system_location" ("location_id_1") `);
        await queryRunner.query(`CREATE INDEX "IDX_e729ab9be32b1f405294c725e5" ON "inventory_system_location" ("location_id_2") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_e729ab9be32b1f405294c725e5"`);
        await queryRunner.query(`DROP INDEX "IDX_cb5bba8ce32eca46a21d03e961"`);
        await queryRunner.query(`ALTER TABLE "inventory_system_location" RENAME TO "temporary_inventory_system_location"`);
        await queryRunner.query(`CREATE TABLE "inventory_system_location" ("location_id_1" integer NOT NULL, "location_id_2" integer NOT NULL, PRIMARY KEY ("location_id_1", "location_id_2"))`);
        await queryRunner.query(`INSERT INTO "inventory_system_location"("location_id_1", "location_id_2") SELECT "location_id_1", "location_id_2" FROM "temporary_inventory_system_location"`);
        await queryRunner.query(`DROP TABLE "temporary_inventory_system_location"`);
        await queryRunner.query(`CREATE INDEX "IDX_e729ab9be32b1f405294c725e5" ON "inventory_system_location" ("location_id_2") `);
        await queryRunner.query(`CREATE INDEX "IDX_cb5bba8ce32eca46a21d03e961" ON "inventory_system_location" ("location_id_1") `);
        await queryRunner.query(`ALTER TABLE "item" RENAME TO "temporary_item"`);
        await queryRunner.query(`CREATE TABLE "item" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "code" varchar, "name" varchar NOT NULL, "categoryOfProduct" varchar NOT NULL, "description" varchar NOT NULL, "amount" integer NOT NULL, "price" integer NOT NULL, "date" datetime NOT NULL DEFAULT (datetime('now')), "updateAt" datetime NOT NULL DEFAULT (datetime('now')), "type_id" integer)`);
        await queryRunner.query(`INSERT INTO "item"("id", "code", "name", "categoryOfProduct", "description", "amount", "price", "date", "updateAt", "type_id") SELECT "id", "code", "name", "categoryOfProduct", "description", "amount", "price", "date", "updateAt", "type_id" FROM "temporary_item"`);
        await queryRunner.query(`DROP TABLE "temporary_item"`);
        await queryRunner.query(`DROP INDEX "IDX_e729ab9be32b1f405294c725e5"`);
        await queryRunner.query(`DROP INDEX "IDX_cb5bba8ce32eca46a21d03e961"`);
        await queryRunner.query(`DROP TABLE "inventory_system_location"`);
        await queryRunner.query(`DROP TABLE "item"`);
        await queryRunner.query(`DROP TABLE "item_type"`);
        await queryRunner.query(`DROP TABLE "item_location"`);
    }

}
