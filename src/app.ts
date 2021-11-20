import { Router } from "express";
import { app } from "test";
const router = Router();

router.get("/test", () => {
    console.log("james is dwon");
});

export default router;
