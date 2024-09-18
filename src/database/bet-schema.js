import db from "../database/db.js";

const Schema = db.Schema;


const betSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  paymentStatus: {
    type: Schema.Types.String,
    enum: ["FINALIZADA", "PENDENTE", "CANCELADA"],
    default: "PENDENTE",
  },
  value: {
    type: Schema.Types.Number,
    required: true,
    min: 1
  },
  status: {
    type: Schema.Types.String,
    enum: ["WINNER", "LOSER", "DRAW"],
    required: true
  },
},{
    timestamps: true
});

const Bet = db.model("Bet", betSchema);

export default Bet;
