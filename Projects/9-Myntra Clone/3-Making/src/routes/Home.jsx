import HomeItem from "../components/HomeItem"
import DEFAULT_ITEMS from "../data/items";
import {useSelector} from "react-redux";

const Home = (DEFAULT_ITEMS) => {

  const items = useSelector(store => store.items);

  // const  ItemObj = {
  //     id: '001',
  //     image: '../images/1.jpg',
  //     company: 'Carlton London',
  //     item_name: 'Rhodium-Plated CZ Floral Studs',
  //     original_price: 1045,
  //     current_price: 606,
  //     discount_percentage: 42,
  //     return_period: 14,
  //     delivery_date: '10 Oct 2023',
  //     rating: {
  //         stars: 4.5,
  //         count: 1400,
  //     }
  // };

  return <main>
    <h1>Home</h1>
    <div className="items-container">
      {items.map(item => (
        <HomeItem key={item.id} item={item} />))}
    </div>
  </main>
}

export default Home;