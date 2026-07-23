import styles from "./WelcomeMessage.module.css"

const WelcomeMessage = ({todoItems}) => {
    return todoItems.length === 0 && <h4 className={styles.welcomeDesign}>Welcome and forget about forgetting your work</h4>
}

export default WelcomeMessage;