import type { Knex } from "knex";
import { TASK_TABLE_NAME } from "../src/config/const";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(TASK_TABLE_NAME, (table) => {
    table.string('id', 100).notNullable();
    table.string('status', 100).notNullable();
    table.string('description', 100).notNullable();
    table.string('assignee', 100).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(TASK_TABLE_NAME);
}

