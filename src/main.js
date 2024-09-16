import express from "express"
import user_router from "./http/routers/user-route.js"

const app = express()
const port = 5000

app.use(express.json())
app.use("/user", user_router);

app.listen (port, () => {
    console.log("listening")
})
