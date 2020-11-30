const {Pool, Client} = require("pg");
//fungerer ikke - const dbCredentials = require("./localenv").credentials


const pool = new Pool({
    user: "postgres",
    password: "Torstein123",
    database: "task_database",
    host: "localhost",
    port: 5432
});


pool.connect()
  .then(()=> console.log("Connected"))
  .then(() => pool.query("INSERT INTO task_table values($1) ", ["ting"]))
  .then(() => pool.query("SELECT * from task_table"))
  .then(results => console.table(results.rows))
  .catch(error => console.log("ERROR",error.message || error))
  .finally(() => pool.end())

module.exports = pool;




