import Knex from "knex";

export const knex = Knex({
  client: "sqlite3",
  connection: {
    filename: "./tmp/app.db",
  },
});
