import express from "express"
import mongoose from "mongoose"
import fileUpload from "express-fileupload"

import router from "./router.js"

const DB_URL = `mongodb+srv://iliarudiuk1:qwerty2020@cluster0.xvxrxam.mongodb.net/?retryWrites=true&w=majority`
const PORT = 6000
const app = express()

app.use(express.json())
app.use(express.static("static"))
app.use(fileUpload({}))
app.use("/api", router)


async function startApp() {
  try {
    await mongoose.connect(DB_URL)

    app.listen(PORT, () => console.log(`Server start on PORT ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

startApp()
