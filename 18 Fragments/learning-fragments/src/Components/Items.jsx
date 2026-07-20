import styles from "./Items.module.css";

const Items = ({ foodItem, bought, handleByClickedCalled }) => {
    // const Items = ({foodItem}) => {

    // const handleByButtonClicked = (event) => {
    //     console.log(event)
    //     console.log(`${foodItem} is added to cart`)
    // }

    return (<><li className={`${styles['kg-item']} list-group-item 
                                ${bought && 'active'}`} key='item'>
        <span className={styles['kg-span']}>{foodItem}</span>
        <button className={`${styles.button} btn btn-info`}
            // onClick={(event) => handleByButtonClicked(event)}
            onClick={handleByClickedCalled}
        >Buy</button>
    </li></>
    );
};

export default Items;