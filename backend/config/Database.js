import { Sequelize } from "sequelize";

const db = new Sequelize("main", "root", "andro@123", {
    host: "localhost",
    dialect: "mysql"
});

export default db;