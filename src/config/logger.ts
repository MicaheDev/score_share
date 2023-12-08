import winston from "winston"

// Configuración del logger
const logger = winston.createLogger({
  level: "info", // Nivel de registro
  format: winston.format.simple(), // Formato de los mensajes de registro
  transports: [
    new winston.transports.Console(), // Salida de los registros por consola
  ],
})

export default logger
