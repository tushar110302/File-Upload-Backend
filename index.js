import express from "express";
import dotenv from "dotenv/config"
import { connectDB } from "./db/index.js";

const app = express()

app.use(express.json())
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send("HELLO") 
})

import { uploadRouter } from "./routes/upload.route.js";
app.use('/upload', uploadRouter)

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on http://localhost:${PORT}`)
    })
})
.catch((err) => {
    console.log("Could not start server")
    console.error(err);
})

