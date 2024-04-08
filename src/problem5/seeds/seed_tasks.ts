import { Knex } from "knex";
import { TASK_TABLE_NAME } from "../src/config/const";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(TASK_TABLE_NAME).del();

    // Inserts seed entries
    await knex(TASK_TABLE_NAME).insert([
        { id: 'default_task_1', status: "done", description: 'Resolve problem 1.', assignee: 'PH' },
        { id: 'default_task_2', status: "doing", description: 'Resolve problem 2.', assignee: 'PH' },
        { id: 'default_task_3', status: "todo", description: 'Resolve problem 3.', assignee: 'PH' },
        { id: 'default_task_4', status: "todo", description: 'Resolve problem 4.', assignee: 'PH' },
    ]);
};
