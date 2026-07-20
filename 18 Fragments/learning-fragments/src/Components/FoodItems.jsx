import { useState } from "react";
import Container from "./Container";
import Items from "./Items";


const FoodItems = ({ X }) => {

    let [activeItems, setActiveItems] = useState([]);

    // const handleByButtonClicked = (item) => {
    //     console.log(`${item} is added to cart`)
    // }

    let onBuyButton = (item, event) => {

        let newItems = [...activeItems, item];
        setActiveItems(newItems);
        // activeItems = [...activeItems, item]
    }

    return (
        <ul className="list-group">
            {X.map((item) => (
                <Items
                    key={item}
                    foodItem={item}
                    bought={activeItems.includes(item)}
                    handleByClickedCalled={() => onBuyButton(item, event)}
                ></Items>
            ))}
        </ul>
    );
};

export default FoodItems;