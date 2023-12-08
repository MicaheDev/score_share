import path from "path"

/* eslint-disable global-require */
if (process.env.NODE_ENV !== "production") {
  if (process.env.NODE_ENV === "test") {
    require("dotenv").config({ path: path.join(__dirname, "../../test.env") })
  } else {
    require("dotenv").config({ path: path.join(__dirname, "../../dev.env") })
  }
} else {
  require("dotenv").config()
}

const setting =  {
  PORT: process.env.PORT,
  ENV: process.env.NODE_ENV,
  DB_URL: process.env.DB_CONNECTION_STRING,
}

export default setting

