import React from "react";

export const Item = (props) => {
    return (
        <div className="">      
            <div className="itemparent">
                <p className="itemtitle">Title: {props.title}</p>
                <p className="itemdesc">Description: {props.description}</p>
                <img className="itemimg" src={props.img} alt='img'/>
                <p className="itemid">ID: {props.id}</p>          
            </div>    
        </div>
    );
}
export default Item;