import db from "../database/db.js"
import betSchema from "../database/bet-schema.js"
const Schema = db.Schema 

const rouletteBetSchema = new Schema({
  bet: betSchema,
  betNumber: {
    type: Schema.Types.Number,
    min: 1,
    max: 100,
    required: true
  },
  drawnNumber: {
    type: Schema.Types.Number,
    min: 1,
    max: 100,
    required: true
  }
})

const RouletteBet = db.model("RouletteBet", rouletteBetSchema)

export default RouletteBet