import { Router } from "express";

const router = Router();

router.post("/callback", async (req, res) => {
    try{
        const {id, firstName, lastName, imageUrl} = req.body;

        // check if user already exists
    } catch (error){

    }
});

export default router;