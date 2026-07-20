import styles from "./FoodInput.module.css"

const FoodInput = ({handleOnChange}) => {

    // const handleOnChange = (event) => {
    //     console.log(event.target.value)
    // }

    return (
        <input
            className={styles.foodInput}
            type="text"
            placeholder="Enter food item here"
            onKeyDown={handleOnChange}
        />
    )


    // const handleOnChange = (event) => {
    //     console.log(event.target.value)
    // }

    // return (
    //     <input className={styles.foodInput} type="text" placeholder="Enter food item here"
    //     onChange={(event) => handleOnChange(event)}
    //     />
    // )
}

export default FoodInput;