const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const authRoutes = require("./routes/auth")

dotenv.config()

const app = express()

app.use(express.json())

connectDB()

app.use("/auth", authRoutes)

app.get("/", (req, res) => {
    res.send("Backend Running")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})