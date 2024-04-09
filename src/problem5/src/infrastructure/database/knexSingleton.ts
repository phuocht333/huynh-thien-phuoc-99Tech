import { Knex, knex } from 'knex';
import config from '../../../knexfile';

export class KnexSingleton {
  private static instance: Knex;
 
  public static getInstance(): Knex {
    if (!KnexSingleton.instance) {
      KnexSingleton.instance = knex(config.development);
    }

    return KnexSingleton.instance
  }
}

