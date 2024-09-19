import db from "../database/db.js";

const Schema = db.Schema;


const betSchema = new Schema({
  user: {
      type: Schema.Types.ObjectId,
      ref: "User"
  },
  value: {
      type: Schema.Types.Number,
      required: true,
      min: 1,
      max: 100
  },
  status: {
      type: Schema.Types.String,
      enum: ["WON", "LOST", "TIED"],
      required: true,
  },
  paymentStatus: {
      type: Schema.Types.String,
      enum: ["FINISHED", "PENDING", "REFUSED", "CANCELLED"],
      default: "PENDING",
  },
})

export default betSchema;