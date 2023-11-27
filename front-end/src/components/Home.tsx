import React from "react";
import '../styles/Home.css';
import me from '../assets/me.png';
import { useState } from "react";


const Home: React.FC = () => {
    const [admire, setAdmire] = useState(true);

    function showBackground() {
        var element = document.getElementById("background") as HTMLDivElement;
        var currentOpacity = window.getComputedStyle(element).getPropertyValue("opacity");
        var newOpacity = currentOpacity === "1" ? "0.08" : "1";
        element.style.opacity = newOpacity;
        setAdmire(!admire);
    }
    

    return (
        <main>
            <div id="background" className="background-image"></div>
            {admire && <div id="img-description-container" className="img-description-container">
                <div className="description-container"></div>
                <img src={me}></img>
            </div>}
            <button onClick={showBackground}>Admire Background</button>
            
            
        </main>
    )
}
export default Home;