# 99Tech Code Challenge #1 #

Note that if you fork this repository, your responses may be publicly linked to this repo.  
Please submit your application along with the solutions attached or linked.   

It is important that you minimally attempt the problems, even if you do not arrive at a working solution.

## Submission ##
You can either provide a link to an online repository, attach the solution in your application, or whichever method you prefer.
We're cool as long as we can view your solution without any pain.

# Solution #

## Problem 4 ##
- Please refer src/problem4/index.ts for detail implementation.
- To run, install ts-node via `npm i ts-node -g` then `ts-node ./src/problem4/index.ts`

## Problem 5 ##
### General ###
- This BE design following the Clean Architecture & DDD in basic.
- Some used libs: Inversify, knex, express-validator, class-transformer, better-sqlite3,...
- Some patterns applied: DI, Singleton, Abstraction, SOLID principles,...
- Folder structure:
    - migrations & seeds: for migrating data.
    - src/core: Base classes/implementation
    - src/config: contain configuration
    - src/infrastructure: Infras layer, contains 3rd party service, DB connection,...
    - src/application: Application layer, contains business logic.
    - Others:
        - DB file: dev.sqlite3
        - Postman config: 99Tech-Problem5.postman_collection.json

### Migration ###
- Install knex cli `npm i knex -g`
- To start migration `knex migrate:up` & run seed file `knex seed:run` (DB has data already, so maybe you don't need to run this)
- To undo migration  `knex migrate:down`

### TODO ###
- Clearly separate the Application layer into Application & Domain layers. Where Domain layer contains the enterprise business rules & Application layers contain application logic. Currently, "entities" has Domain behavior.
- Add base controller & handle error more efficiently.
- Add middlewares: authentication, authorization, gzip response,...
- Config .env
- ...
