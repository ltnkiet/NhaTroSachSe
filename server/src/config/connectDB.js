const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER_NAME, null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
  timezone: "+07:00",
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default connectDB;
