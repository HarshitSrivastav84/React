import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagSlice";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";

const HomeItem = ({ item }) => {

    const dispatch = useDispatch();

    const bagItems = useSelector(store => store.bag);
    const elementFound = bagItems.indexOf(item.id) >= 0;
    console.log(item.id, elementFound);

    const handleAddToBag = () => {
        console.log("Item was clicked again");
        dispatch(bagAction.addToBag(item.id));
    }

    return <>
        <div className="item-container">
            <img className="item-image" src={item.image} alt="item image" />
            <div className="rating">
                {item.rating.stars} ⭐ | {item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
                <span className="current-price">Rs {item.current_price}</span>
                <span className="original-price">Rs {item.original_price}</span>
                <span className="discount">{item.discount_percentage}% OFF</span>
            </div>
            {/* <button className="btn-add-bag" onClick={handleAddToBag}>
                Add to Bag
            </button> */}

            {elementFound ? (<button type="button" className="btn btn-add-bag btn-danger">
                <IoIosRemoveCircle /> Remove
            </button>) : (<button type="button" className="btn btn-add-bag btn-success" onClick={handleAddToBag}>
                <IoIosAddCircle /> Add to Bag
            </button>)}

        </div>
    </>
}

export default HomeItem;