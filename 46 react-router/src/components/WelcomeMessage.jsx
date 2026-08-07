const WelcomeMessage = ({ onPostClick }) => {
    return (
        <center className="welcome-message">
            <h1>There are no posts to display</h1>
            <button type="button" className="btn btn-primary"
                onClick={onPostClick}
            >Fetch posts</button>
        </center>
    )
}

export default WelcomeMessage;