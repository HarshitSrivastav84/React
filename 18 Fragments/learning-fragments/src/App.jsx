import React, { useState } from "react";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Item from "./Components/Items";
import "./App.css"
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";

function App() {

  // let foodItems = ['Dal', 'Green vegetables', 'Roti', 'Salad', 'Milk', 'Ghee'];
  let [foodItems, setFoodItems] = useState(['Dal', 'Green vegetables', 'Roti']);

  // setFoodItems() => {
  //   if(KeyboardEvent === "Enter"){
  //     setTextToShow;
  //   }
  // }

  // let textStateArr = useState("Food item entered by the user");
  // let textToShow = textStateArr[0];
  // let setTextToShow = textStateArr[1];

  // let [textToShow, setTextToShow] = useState();


  const handleOnChange = (event) => {
    if(event.key === "Enter"){
      let newFoodItem = event.target.value;
      event.target.value = ''
      let newItems = [...foodItems, newFoodItem]
      setFoodItems(newItems)
      // {document.querySelector(".foodInput").inner = ''}
      // console.log(`Value to add is ${newFoodItem}`)
    }
  }

  // const handleOnChange = () => {
  //   let input = `${input.innerHTML}`
  //   console.log(input)
  // }

  return (
    <>
      <Container>
        <h2 className="food-heading">Healthy food</h2>
        <FoodInput handleOnChange={() => handleOnChange(event)}></FoodInput>
        <ErrorMessage XYZ={foodItems}></ErrorMessage>
        {/* <p>{textToShow}</p> */}
        <FoodItems X={foodItems}></FoodItems>
      </Container>


      {/* <Container>
        <p className="para">Above is the list of healthy food that are good for your health and well being</p>
      </Container> */}
    </>
  );











  // // if(foodItems.length === 0){
  // //   return <h3>I am still hungry.</h3>
  // // }

  // return (
  //   // <div>
  //   // <React.Fragment>
  //   <>
  //     <h2>Healthy food</h2>

  //     {/* {foodItems.length === 0 ? <h3>I am still hungry</h3> : null} */}
  //     {foodItems.length === 0 && <h3>I am still hungry</h3>}

  //     <ul className="list-group">
  //       {/* <li class="list-group-item">An item</li>
  //       <li class="list-group-item">A second item</li>
  //       <li class="list-group-item">A third item</li>
  //       <li class="list-group-item">A fourth item</li>
  //       <li class="list-group-item">And a fifth one</li> */}

  //       {foodItems.map((item) => (
  //         <li key={item} className="list-group-item">{item}</li>
  //       ))}

  //       {/* <li class="list-group-item">{foodItems}</li> */}
  //     </ul>
  //     {/* </div> */}
  //     {/* </React.Fragment> */}
  //   </>
  // );


}

export default App;