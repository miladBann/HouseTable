import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

function SubmitHouse() {

    const [submitted, setSubmitted] = useState(false);
    const [address, setAddress] = useState("");
    const [value, setValue] = useState("");
    const [loan, setLoan] = useState("");

    /* this function takes the data that the user submitted on
       the page and sends it to the endpoint /api/houses in the server */
       
    const handleSubmit = async () => {
        const data = {
            address: address,
            value: value,
            loan: loan,
        };

        try {
            const response = await axios.post("http://localhost:3001/api/houses", data);

            if (response.status === 200) {
                setSubmitted(true);
            }
        } catch (error) {
            console.error("Error sending data:", error);
        }
    };

    return (
        <div className="main_cont">
            <Link to="/"><h3 className="linker">go to home page</h3></Link> 

            <div className="form_cont">
                
                <h2>Submit a new house record</h2>

                <div className="input_info"> 
                    <h3>House Address: </h3>
                    <input type="text" onChange={(e) => setAddress(e.target.value)}/>
                </div>

                <div  className="input_info">
                    <h3>House Value: </h3>
                    <input type="text" onChange={(e) => setValue(e.target.value)}/>
                </div>

                <div  className="input_info">
                    <h3>Loan amount: </h3>
                    <input type="text" onChange={(e) => setLoan(e.target.value)}/>
                </div>
                
                <button onClick={handleSubmit}>Submit</button>
            </div>

            {submitted ? <Link to="/house-details"><h3 className="show_house">Show the new house details</h3></Link> : null}
            

        </div>
    );   
}

export default SubmitHouse;