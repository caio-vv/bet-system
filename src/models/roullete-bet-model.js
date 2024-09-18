import db from "../database/db.js"
import Bet from "../database/bet-schema.js"
const Schema = db.Schema 

const rouletteBetSchema = new Schema({
  bet: Bet,
  betNumber: {
    betNumber: Schema.Types.BigInt,
    min: 1,
    max: 100,
    required: true
  },
  drawnNumber: {
    betNumber: Schema.Types.BigInt,
    min: 1,
    max: 100,
    required: true
  }
})

const RouletteBet = db.model("RouletteBet", rouletteBetSchema)

export default RouletteBet