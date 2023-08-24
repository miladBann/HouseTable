import { Link } from "react-router-dom";

//home page component and the starting point of the app
function Home() {
    return (
        <div className="main_cont">
            <div className="cont">
                <h1>welcome</h1>

                <Link to="/submit-house"><button className="new_house">Submit a new house record</button></Link>
            </div>
            
        </div>
    );
}


export default Home;