import React from "react";
import op from "./op.jpg";
import './Img.css'
export default function Img()
{
    return(
        <div className="part">
        <img src={op} className="Img" alt='' width={255} height={350}></img>
        </div>
    )
}


