import React from "react";

export const Item = (props) => {
    return (
        <div>      
            <div className="itemparent">
                <p className="itemtitle"><b>Title: </b>{props.title}</p>
                <p className="itemdesc"><b>Description: </b>{props.description}</p>
                <img className="itemimg" src={props.img} alt='img'/>
                <p className="itemid"><b>Item ID: </b>{props.id}</p>          
            </div>    
        </div>
    );
}
export default Item;