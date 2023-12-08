import logger from "./logger";
import setting from "./settings";
import mongoose from "mongoose";
import createHttpError from "http-errors";

const connectToDatabase = async () => {
  if (setting.DB_URL) {
    const connectionString: string = setting.DB_URL;
    try {
      await mongoose.connect(connectionString);

      logger.info("Base de datos conectada correctamente.");
    } catch (error) {
      throw createHttpError(500, "Error al conectar a la base de datos.");
    }
  }
};

export { connectToDatabase };
