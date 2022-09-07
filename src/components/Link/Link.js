import React from "react";

export default function Link(props)
{
    return(
        <div>
            <br>
            <a href={props.url}>{props.linktext}</a>
       </br>
       </div>
    )
}

