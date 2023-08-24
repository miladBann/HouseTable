//this server route is responsible for submitting a new house record 
//and storing it in the database

const express = require('express');
const router = express.Router();
const { House } = require("./db");

function calculateRisk(currentValue, loanAmount) {
    let risk = loanAmount / currentValue;
    if (risk > 0.5) {
        risk += 0.1;
    }
    return Math.min(risk, 1);
}

router.post("/", async (req, res) => {
    const { address, value, loan } = req.body;

    try {
        const newHouse = await House.create({
            address: address,
            currentValue: value,
            loanAmount: loan,
            risk: calculateRisk(value, loan) // Calculate and set the risk
        });

        res.status(200).json(newHouse);
    } catch (error) {
        res.status(500).json({ error: "Error creating house record." });
        console.log(error)
    }
});


module.exports = router;