import React from "react";

import './components.scss';

export default function PartnersLogo(props){

    return(
        <div className="logo" style={{lineHeight:props.lineHeight}}>
            <img src={props.img} style={{width:props.width}}/>
        </div>
    )
}