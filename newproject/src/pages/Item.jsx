import React from "react";

export const Item = (props) => {
    return (
        <div className="">      
            <div className="itemparent">
                <p>Title: {props.title}</p>
                <p>Description: {props.description}</p>
                <p>Image: {props.img}</p>
                <p>ID: {props.id}</p>          
            </div>    
        </div>
    );
}
export default Item;