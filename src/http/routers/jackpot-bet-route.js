import express from "express"
import jackpotBetController from "../controllers/jackpot-bet-controller.js"

const router = express.Router()

router.post("/", jackpotBetController.store)
router.get("/", jackpotBetController.index)
router.get("/:id", jackpotBetController.show)
router.put("/:id", jackpotBetController.updated)
router.delete("/:id", jackpotBetController.destroy)

export default router