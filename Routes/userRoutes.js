import express from "express";

const router = express.Router();

router.post('/register-user', (req, res) =>{
    return res.status(201).json({
        message:"user registered succesfully",
        success:true
    })

})

export default router;