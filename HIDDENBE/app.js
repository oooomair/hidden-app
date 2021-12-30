// require statements
require("dotenv").config()

const express = require("express")

const app = express()

const mongoose = require("mongoose")

const { createProxyMiddleware } = require("http-proxy-middleware")

const cors = require('cors')

const routes = require("./routes")

app.use(cors())

app.use(express.json())

app.use(routes)

app.use((req, res, next) => {
    const err = new Error("not found")
    err.status = 404 
    next(err)
})

app.use((error, request, response, next) => {
    response.status(error.status || 500);
    response.json({
        error: {
            message: error.message
        }
    })
})

app.use(
    "/api", createProxyMiddleware({
        target:'http//:localhost:8000',
        changeOrigin: true
    })
)

main().catch(err => console.log(err))

async function main() {
    await mongoose.connect(process.env.DB_CONNECTION, () => {
        console.log('connected to the database');
    })
}

app.listen(8000, () => {
    console.log('server running on port 8000');
})
