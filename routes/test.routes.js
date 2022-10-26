import express from "express"
import { getName,createName } from "../controllers/test.controller.js";

const router = express.Router()

router.post("/",createName)
router.get("/",getName)

export default router
