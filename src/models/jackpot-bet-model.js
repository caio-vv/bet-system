import db from "../database/db.js"
import betSchema from "../database/bet-schema.js"
const Schema = db.Schema 

const jackpotBetSchema = new Schema({
  bet: betSchema,
  numbers: {
    type: [Schema.Types.Number]
  }
})

const JackpotBet = db.model("JackpotBet", jackpotBetSchema)

export default JackpotBet