const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ntssdb", "root", null, {
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
