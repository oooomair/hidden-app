// localhost: 8000
const router = require("express").Router()
// importing api index 

const apiRouter = require("./api/index")

router.use("/api", apiRouter)

module.exports = router