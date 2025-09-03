import { Router } from "express";
import { Song } from "../models/song.model.js";

const router = Router();

router.get("/", async (req, res, next) => {

    try {

      const totalSongs = await Song

    } catch (error) {
        
    }
});

export default router;