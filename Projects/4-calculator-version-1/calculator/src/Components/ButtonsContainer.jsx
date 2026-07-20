import styles from "./ButtonsContainer.module.css"

const ButtonsContainer = () => {

    const buttonNames = ['c', '1', '2', '+', '3', '4', '-', '5', '6',
        '*', '7', '8', '/', '=', '9', '0', '.'];
    return (
        <div className={styles.buttonsContainer}>
            {buttonNames.map(btn =>
                <button key={btn} className={styles.button}>{btn}</button>
            )}
            {/* <button className={styles.button}>C</button> */}
        </div>
    );
}

export default ButtonsContainer;