import express from "express"
import competitorController from "../controllers/competitor-controller.js"

const router = express.Router()

router.post("/", competitorController.store)
router.get("/", competitorController.index)
router.get("/:id", competitorController.show)
router.put("/:id", competitorController.updated)
router.delete("/:id", competitorController.destroy)

export default router