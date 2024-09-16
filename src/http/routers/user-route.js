import express from "express"
import userController from "../controllers/user-controller.js"

const router = express.Router()

router.post("/", userController.store)
router.get("/", userController.index)
router.get("/:id", userController.show)
router.put("/:id", userController.updated)
router.delete("/:id", userController.destroy)

export default router