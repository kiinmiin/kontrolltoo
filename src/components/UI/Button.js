import React, { useState } from "react";

const Button = (props) => {
    const [textOnly, setTextOnly] = useState(false)
    

    
    if (textOnly === true) {
        return <button className="text-button" onClick={props.onClick}>
            {props.children} 
        </button>
    } else {
        return <button className="button" onClick={props.onClick}>
            {props.children} 
        </button>
    } 
} 

export default Button;