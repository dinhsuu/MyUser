import { Sequelize } from "sequelize";
import Configs from "../utils/Configs";

const instance = new Sequelize(
  `mariadb://${Configs.db.user}:${Configs.db.password}@${Configs.db.host}:${Configs.db.port}/${Configs.db.database}`,
  {
    pool: { max: 30, min: 0, acquire: 60000, idle: 5000 },
    logging: false,
    timezone: "+07:00",
  }
);

export default {
  instance,
  sync: async () => {
    console.log("Sequelize sync");
    await instance.sync({ force: false });
    console.log("Sequelize sync finish");
  },
};
