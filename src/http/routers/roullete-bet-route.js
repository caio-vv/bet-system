import express from "express"
import roulleteController from "../controllers/roullete-bet-controller.js"

const router = express.Router()

router.post("/", roulleteController.store)
router.get("/", roulleteController.index)
router.get("/:id", roulleteController.show)
router.put("/:id", roulleteController.update)

export default router