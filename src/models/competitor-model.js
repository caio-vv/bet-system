import db from "../database/db.js"

const Schema = db.Schema 

const competitorSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true
  }

})

const Competitor = db.model("Competitor", competitorSchema)

export default Competitor