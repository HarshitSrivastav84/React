// import Header from "./Header";
// import Footer from "./Footer";

import BagSummary from "../components/BagSummary";
import BagItems from "./BagItem";

const Bag = () => {

    const item = {
        id: '001',
        image: '../images/1.jpg',
        company: 'Carlton London',
        item_name: 'Rhodium-Plated CZ Floral Studs',
        current_price: 606,
        original_price: 1045,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
    };

    return (
        <>
            {/* <Header /> */}
            {/* No need for header and footer as it is fixed */}
            <main>
                <h1>Bag</h1>
                <div className="bag-page">
                    <div className="bag-items-container">
                        <BagItems item={item} />
                    </div>

                    <BagSummary />

                </div>
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default Bag;