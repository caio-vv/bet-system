import express from "express"
import roulleteController from "../controllers/roullete-controller.js"

const router = express.Router()

router.post("/", roulleteController.store)
router.get("/", roulleteController.index)
router.get("/:id", roulleteController.show)
router.put("/:id", roulleteController.updated)
router.delete("/:id", roulleteController.destroy)

export default router