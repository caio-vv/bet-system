import express from "express"
import matchController from "../controllers/match-controller.js"

const router = express.Router()

router.post("/", matchController.store)
router.get("/", matchController.index)
router.get("/:id", matchController.show)
router.put("/:id", matchController.updated)
router.delete("/:id", matchController.destroy)

export default router