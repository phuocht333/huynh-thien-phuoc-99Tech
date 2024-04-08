import { knex } from 'knex';

class KnexSingleton {
  private static instance: KnexSingleton;

  private constructor() {
    KnexSingleton.instance = knex({
      client: 'better-sqlite3',
      connection: {
        filename: './problem5.sqlite',
      }
    });
  }

  public static getInstance(): KnexSingleton {
    if (KnexSingleton.instance === null) {
      KnexSingleton.instance = new KnexSingleton()
    }

    return KnexSingleton.instance
  }
}

