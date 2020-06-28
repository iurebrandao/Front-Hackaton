import React from 'react';
import './Item.css';
import circle from "../../../assets/img/circle.svg";

const Item = (props) => {
    return(
        <div className="divItem">
            <div className="divSelected">
                {
                    props.selected && (<img className="circle" src={circle}/>)
                }
            </div>
            <div className="divIcon">
                <img className="icon" alt="loading" src={props.icon}/>
            </div>
            <div className="divText">
                    <h2 className="title"> {props.title} </h2>
                    {props.text}
            </div>
        </div>
    )
}


export default Item;