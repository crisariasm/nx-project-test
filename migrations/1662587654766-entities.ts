import { MigrationInterface, QueryRunner } from "typeorm";

export class entities1662587654766 implements MigrationInterface {
    name = 'entities1662587654766'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "location" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "country" varchar NOT NULL, "State" varchar NOT NULL, "city" varchar NOT NULL, "postalCode" integer NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "type" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "initial" boolean NOT NULL, "final" boolean NOT NULL, "annual" boolean NOT NULL, "journal" boolean NOT NULL, "rawMaterial" boolean NOT NULL, "product" boolean NOT NULL, "stock" boolean NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "inventory_system" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "codigo" varchar NOT NULL, "name" varchar NOT NULL, "categoryOfProduct" varchar NOT NULL, "description" varchar NOT NULL, "cantidad" integer NOT NULL, "valor" integer NOT NULL, "date" datetime NOT NULL DEFAULT (datetime('now')), "updateAt" datetime NOT NULL DEFAULT (datetime('now')), "type_id" integer)`);
        await queryRunner.query(`CREATE TABLE "inventory_system_location" ("location_id_1" integer NOT NULL, "location_id_2" integer NOT NULL, PRIMARY KEY ("location_id_1", "location_id_2"))`);
        await queryRunner.query(`CREATE INDEX "IDX_cb5bba8ce32eca46a21d03e961" ON "inventory_system_location" ("location_id_1") `);
        await queryRunner.query(`CREATE INDEX "IDX_e729ab9be32b1f405294c725e5" ON "inventory_system_location" ("location_id_2") `);
        await queryRunner.query(`CREATE TABLE "temporary_inventory_system" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "codigo" varchar NOT NULL, "name" varchar NOT NULL, "categoryOfProduct" varchar NOT NULL, "description" varchar NOT NULL, "cantidad" integer NOT NULL, "valor" integer NOT NULL, "date" datetime NOT NULL DEFAULT (datetime('now')), "updateAt" datetime NOT NULL DEFAULT (datetime('now')), "type_id" integer, CONSTRAINT "FK_feb1c3ec1b6d2fc22ff6693306d" FOREIGN KEY ("type_id") REFERENCES "type" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_inventory_system"("id", "codigo", "name", "categoryOfProduct", "description", "cantidad", "valor", "date", "updateAt", "type_id") SELECT "id", "codigo", "name", "categoryOfProduct", "description", "cantidad", "valor", "date", "updateAt", "type_id" FROM "inventory_system"`);
        await queryRunner.query(`DROP TABLE "inventory_system"`);
        await queryRunner.query(`ALTER TABLE "temporary_inventory_system" RENAME TO "inventory_system"`);
        await queryRunner.query(`DROP INDEX "IDX_cb5bba8ce32eca46a21d03e961"`);
        await queryRunner.query(`DROP INDEX "IDX_e729ab9be32b1f405294c725e5"`);
        await queryRunner.query(`CREATE TABLE "temporary_inventory_system_location" ("location_id_1" integer NOT NULL, "location_id_2" integer NOT NULL, CONSTRAINT "FK_cb5bba8ce32eca46a21d03e9619" FOREIGN KEY ("location_id_1") REFERENCES "inventory_system" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_e729ab9be32b1f405294c725e5a" FOREIGN KEY ("location_id_2") REFERENCES "location" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, PRIMARY KEY ("location_id_1", "location_id_2"))`);
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
        await queryRunner.query(`ALTER TABLE "inventory_system" RENAME TO "temporary_inventory_system"`);
        await queryRunner.query(`CREATE TABLE "inventory_system" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "codigo" varchar NOT NULL, "name" varchar NOT NULL, "categoryOfProduct" varchar NOT NULL, "description" varchar NOT NULL, "cantidad" integer NOT NULL, "valor" integer NOT NULL, "date" datetime NOT NULL DEFAULT (datetime('now')), "updateAt" datetime NOT NULL DEFAULT (datetime('now')), "type_id" integer)`);
        await queryRunner.query(`INSERT INTO "inventory_system"("id", "codigo", "name", "categoryOfProduct", "description", "cantidad", "valor", "date", "updateAt", "type_id") SELECT "id", "codigo", "name", "categoryOfProduct", "description", "cantidad", "valor", "date", "updateAt", "type_id" FROM "temporary_inventory_system"`);
        await queryRunner.query(`DROP TABLE "temporary_inventory_system"`);
        await queryRunner.query(`DROP INDEX "IDX_e729ab9be32b1f405294c725e5"`);
        await queryRunner.query(`DROP INDEX "IDX_cb5bba8ce32eca46a21d03e961"`);
        await queryRunner.query(`DROP TABLE "inventory_system_location"`);
        await queryRunner.query(`DROP TABLE "inventory_system"`);
        await queryRunner.query(`DROP TABLE "type"`);
        await queryRunner.query(`DROP TABLE "location"`);
    }

}
