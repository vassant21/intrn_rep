import React from "react";
import op from "./op.jpeg";
import ace from "./ace.jpg";

import './Img.css'
export default function Img()
{
    return(
        <div className="part">
        <img src={op} className="Img" alt='' width={760} height={570}></img>
        <img src={ace} className="Img" alt='' width={760} height={570}></img>
        </div>
    )
}


