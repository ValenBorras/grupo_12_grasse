import React from "react"
import './css/Panel.css'

function Panel(props){
    return (
        <div className="Panel">
            {props.children}
        </div>
    )
}

export default Panel