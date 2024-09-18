import db from "../database/db.js"
import Bet from "../database/bet-schema.js"
import Competitor from "./competitor-model.js"
const Schema = db.Schema 

const matchBetSchema = new Schema({
  bet: {
    bet: Bet
  },
  match:{
    match: Match,
  },
  odd:{
    type: Schema.Types.Number,
  },
  competitor:{
    competitor: Competitor
  }
})

const MatchBet = db.model("MatchBet", matchBetSchema)

export default MatchBet   