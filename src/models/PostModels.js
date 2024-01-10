import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Post = db.define('post', {
    name: DataTypes.STRING, //name
    // harga: dataTypes.INT, // tambahan
    image: DataTypes.STRING, // sama
    url: DataTypes.STRING // sama 
}, {
    freezeTableName: true
});

export default Post;

(async () => {
    await db.sync();
});