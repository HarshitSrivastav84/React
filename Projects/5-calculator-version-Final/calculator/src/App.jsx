import styles from "./App.module.css"
import Display from "./Components/Display"
import ButtonsContainer from "./Components/ButtonsContainer"
import { useState } from "react";

function App(){

  let [calVal, setCalVal] = useState("");

  const operationOnClick = () => {
    let btnValue = event.target.innerText;
    if(btnValue === 'C'){
      setCalVal("");
    }
    else if(btnValue === '='){
      setCalVal(eval(calVal));
      return;
    }
    else{
    setCalVal(calVal + btnValue);
    }
  }

  return <div className={styles.calculator}>
    <Display displayCalVal={calVal}></Display>
    <ButtonsContainer onButtonClick={() => operationOnClick()}></ButtonsContainer>
  </div>
}

export default App;