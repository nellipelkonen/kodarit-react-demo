import React from "react";
import { Item } from './Item';
import { items } from '../Items';

export const Items = () => {
    return (
        <div className="maincontent">
            {
                items.map(({title, description, img, id}) => <Item title={title} description={description} img={img} id={id} />)
            }
        </div>
    );
}
export default Items;
