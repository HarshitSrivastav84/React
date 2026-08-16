import HomeItem from "../components/HomeItem"

const Home = () => {

    const  ItemObj = {
        id: '001',
        image: '../images/1.jpg',
        company: 'Carlton London',
        item_name: 'Rhodium-Plated CZ Floral Studs',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        }
    
        // {
          //     id: '002',
          //     image: 'images/2.jpg',
          //     company: 'CUKOO',
          //     item_name: 'Women Padded Halter Neck Swimming Dress',
          //     original_price: 2599,
          //     current_price: 1507,
          //     discount_percentage: 42,
          //     return_period: 14,
          //     delivery_date: '10 Oct 2023',
          //     rating: {
            //         stars: 4.3,
            //         count: 24,
            //     },
            // }
            
          };

    return <main>
        <h1>Home</h1>
        <div className="items-container">
          <HomeItem item={ItemObj}/>
        </div>
      </main>
}

export default Home;