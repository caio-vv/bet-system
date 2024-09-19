import "dotenv/config"
import express from "express"
import user_router from "./http/routers/user-route.js"
import roulette_router from "./http/routers/roullete-bet-route.js"
import jackpot_bet_controller from "./http/routers/jackpot-bet-route.js"


const app = express()
const port = process.env.API_PORT

app.use(express.json())
app.use("/user", user_router);
app.use("/roullete-bet", roulette_router);
app.use("/jackpot-bet", jackpot_bet_controller)


app.listen (port, () => {
    console.log("listening")
})