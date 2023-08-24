//this server route is responsible for returning the house info 
//from the database to the frontend so it can be displayed to the user.

const express = require('express');
const router = express.Router();
const { House } = require("./db");

router.get("/", async (req, res) => {

    try {
        const latestHouse = await House.findOne({
            order: [["createdAt", "DESC"]],
        });

        if (!latestHouse) {
            return res.status(404).json({ error: "No houses found." });
        }

        res.status(200).json(latestHouse);
        
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "An error occurred." });
    }
    
})


module.exports = router;