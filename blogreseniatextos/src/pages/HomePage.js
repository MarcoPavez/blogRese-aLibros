import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
    const navigate=useNavigate();
    
    return (
        <div>
           <Header/>
        </div>
    )
}