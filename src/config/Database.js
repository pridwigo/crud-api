import { Sequelize } from "sequelize";

const db = new Sequelize('tokoku_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;