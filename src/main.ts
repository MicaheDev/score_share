import cors from "cors"
import express from "express"
import http from "http"
import mongoose from "mongoose"
import { connectToDatabase } from "./config/db"
import logger from "./config/logger"

// Incio de la app
const app = express()
const server = http.createServer(app)

// Configuración y middlewares globales
app.use(cors())
app.use(express.json())


// Conexión a la base de datos
connectToDatabase()

app.use("/", (_req, res) => {
  res.send("Hola")
})

// Inicio del servidor
server.listen(8000, () => {
  logger.info(`Servidor corriendo en http://localhost:${8000|| 3001}`)
})

// Middleware de manejo de errores
app.use((err: any, _req, res:any) => {
  console.error(err.message)
  res.status(err.status || 500)
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  })
})

// Handle SIGINT (Ctrl+C) event
process.on("SIGINT", async () => {
  try {
    await mongoose.connection.close()
    logger.info(
      "La conexión predeterminada de Mongoose se desconectó debido a la finalización de la aplicación",
    )
    process.exit(0)
  } catch (error) {
    logger.error("Error al cerrar la conexión a la base de datos: ", error)
    process.exit(1)
  }
})
