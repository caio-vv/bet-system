import express from "express"
import matchBetController from "../controllers/match-bet-controller.js"

const router = express.Router()

router.post("/", matchBetControllerController.store)
router.get("/", matchBetControllerController.index)
router.get("/:id", matchBetControllerController.show)
router.put("/:id", matchBetControllerController.updated)
router.delete("/:id", matchBetControllerController.destroy)

export default router