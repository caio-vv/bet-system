import db from "../database/db.js"
import Bet from "../database/bet-schema.js"
const Schema = db.Schema 

const jackpotBetSchema = new Schema({
  bet: {
    bet: Bet
  },
})

const JackpotBet = db.model("JackpotBet", jackpotBetSchema)

export default JackpotBet