const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "7wyb3b",
    database: "mini_insta",
  },
  useNullAsDefault: true,
});

module.exports = knex;
