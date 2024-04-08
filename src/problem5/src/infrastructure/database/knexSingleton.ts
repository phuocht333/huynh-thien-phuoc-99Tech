import { Knex, knex } from 'knex';

export class KnexSingleton {
  private static instance: Knex;
 
  public static getInstance(): Knex {
    if (KnexSingleton.instance === null) {
      KnexSingleton.instance = knex({
        client: 'better-sqlite3',
        connection: {
          filename: './dev.sqlite3',
        }
      });
    }

    return KnexSingleton.instance
  }
}

