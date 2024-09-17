import express from "express"
import user_router from "./http/routers/user-route.js"
import roulette_router from "./http/routers/roullete-bet-route.js"
import match_router from "./http/routers/match-route.js"
import matchBet_router from "./http/routers/match-bet-route.js"
import jackpotBet_router from "./http/routers/jackpot-bet-route.js"
import competitor_router from "./http/routers/competitor-route.js"

const app = express()
const port = 5000

app.use(express.json())
app.use("/user", user_router);
app.use("/roullete-bet", roulette_router);
app.use("/match", match_router);
app.use("/match-bet", matchBet_router);
app.use("/jackpot-bet", jackpotBet_router);
app.use("/competitor", competitor_router);

app.listen (port, () => {
    console.log("listening")
})
