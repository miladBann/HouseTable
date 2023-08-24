import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios";


function HouseDetails() {

    const [moadlClicked, setModalClicked] = useState(false);
    const [latestHouse, setLatestHouse] = useState(null);
    const [newAddress, setNewAddress] = useState("");
    const [newValue, setNewValue] = useState("");
    const [newLoan, setNewLoan] = useState("");

    /* this useEffect fetches the data from our server at endpoint /api/houses/latest
       and stores it inside latestHouse useState so we can display the house data */

    useEffect(() => {
        async function fetchLatestHouse() {
            try {
                const response = await axios.get("http://localhost:3001/api/houses/latest");
                setLatestHouse(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchLatestHouse();
    }, []);

    /*this function calculates the risk based on the given algorithem every time 
      we update the loan amount or the current value of the house */
    function calculateRisk(currentValue, loanAmount) {
        let risk = loanAmount / currentValue;
        if (risk > 0.5) {
            risk += 0.1;
        }
        return Math.min(risk, 1);
    }

    /*this async function displayes the newly updated data to the user */
    async function handleUpdate() {
        try {
            await axios.put(`http://localhost:3001/api/houses/${latestHouse.id}`, {
                newAddress,
                newValue,
                newLoan,
            });

            const newRisk = calculateRisk(newValue, newLoan);

            setLatestHouse(prevLatestHouse => ({
                ...prevLatestHouse,
                address: newAddress,
                currentValue: newValue,
                loanAmount: newLoan,
                risk: newRisk,
            }));


            setModalClicked(false);
        } catch (error) {
            console.error("Error updating data:", error);
        }
    }


    return (
        <div className="main_cont2">
            <Link to="/"><h3 className="linker">go to home page</h3></Link> 

            <h2>Your House Details</h2>

            <div className="details_cont">

                {latestHouse ? (
                    <>
                        <div className="info">
                            <h3>House ID: </h3>
                            <h3>{latestHouse.id}</h3>
                        </div>

                        <div className="info">
                            <h3>House Address: </h3>
                            <h3>{latestHouse.address}</h3>
                        </div>

                        <div className="info">
                            <h3>Current Value: </h3>
                            <h3>{latestHouse.currentValue}</h3>
                        </div>

                        <div className="info">
                            <h3>Loan Amount: </h3>
                            <h3>{latestHouse.loanAmount}</h3>
                        </div>

                        <div className="info">
                            <h3>risk: </h3>
                            <h3>{latestHouse.risk}</h3>
                        </div>

                        <button onClick={() => setModalClicked(true)}>Update Details</button>
                    </>
                ) : <p>Loading...</p>}
                

            </div>

            {
                moadlClicked ? (
                    <div className="modal">
                        <h3 onClick={() => setModalClicked(false)} className="closeModal">❌</h3>

                        <h2> Update House Details</h2>

                        <div className="update_info">
                            <h3>Change Address: </h3>
                            <input type="text" onChange={(e) => setNewAddress(e.target.value)}/>
                        </div>

                        <div className="update_info">
                            <h3>Change Value: </h3>
                            <input type="text" onChange={(e) => setNewValue(e.target.value)}/>
                        </div>

                        <div className="update_info">
                            <h3>Change Loan: </h3>
                            <input type="text" onChange={(e) => setNewLoan(e.target.value)}/>
                        </div>

                        <button onClick={handleUpdate}>Update</button>
                    </div>
                ) : null
            }
            

        </div>
    );
}

export default HouseDetails;