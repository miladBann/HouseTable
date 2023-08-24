//this server route is responsible for updating the house info
//in the database and sending the updates to the frontend for the user

const express = require('express');
const router = express.Router();
const { House } = require("./db");

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const house = await House.findByPk(id);
        if (!house) {
            return res.status(404).json({ error: "House not found." });
        }

        // Update house attributes based on request body
        const { newAddress, newValue, newLoan } = req.body;
        house.address = newAddress;
        house.currentValue = newValue;
        house.loanAmount = newLoan;

        // Recalculate risk
        house.save(); // This will trigger the virtual getter for risk
        
        res.status(200).json(house);
    } catch (error) {
        res.status(500).json({ error: "Error updating house record." });
        console.log(error);
    }
});


module.exports = router;