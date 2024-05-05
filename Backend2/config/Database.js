import { Sequelize } from "sequelize";

const db = new Sequelize ('produk_db' , 'root' , '' , {
    host: 'localhost',
    dialect: "mysql"
});

export default db;
