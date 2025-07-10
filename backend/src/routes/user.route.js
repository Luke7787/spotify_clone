import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    console.log("✅ GET /api/users route hit");
    res.send('User route with GET method');
});

export default router;