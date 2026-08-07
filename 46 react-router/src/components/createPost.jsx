import { useRef, useContext } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {

    const { addPost } = useContext(PostList);

    const userIDElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userID = userIDElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
        // const reactions = reactionsElement.current.value;
        const reactions = Number(reactionsElement.current.value);
        const tags = tagsElement.current.value.split(" ");

                // Clear the input fields after submission
        // userIDElement.current.value = "";
        // postTitleElement.current.value = "";
        // postBodyElement.current.value = "";
        // reactionsElement.current.value = "";
        // tagsElement.current.value = "";

        /* updating title of product with id 1 */
        fetch('https://dummyjson.com/products/add', {
            method: 'POST', /* or PATCH */
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: postTitle,
                body: postBody,
                reactions,
                userID,
                tags,
            })
        })
            .then(res => res.json())
            .then(console.log)
            .then(post => addPost(post));

        // console.log(`User ID: ${userID}`);

        // addPost(userID, postTitle, postBody, reactions, tags);
    }

    return (
        <>
            <form className="create-post" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="userID" className="form-label">
                        Enter User ID</label>
                    <input
                        type="text"
                        ref={userIDElement}
                        className="form-control"
                        id="userID"
                        placeholder="Your user ID"
                        aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Post title</label>
                    <input type="text"
                        ref={postTitleElement}
                        className="form-control"
                        id="title"
                        placeholder="How are you feeling today..."
                        aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">
                        Post content</label>
                    <textarea
                        rows="4"
                        type="text"
                        ref={postBodyElement}
                        className="form-control"
                        id="body"
                        placeholder="Tell us something about your day..."
                        aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="reactions" className="form-label">
                        Number of reactions</label>
                    <input
                        type="number"
                        ref={reactionsElement}
                        className="form-control"
                        id="reactions"
                        placeholder="How many people reacted to this post"
                        aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">
                        Enter your hashtags here</label>
                    <input
                        type="text"
                        ref={tagsElement}
                        className="form-control"
                        id="tags"
                        placeholder="Enter your tags using space"
                        aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-primary">Post</button>
            </form>
        </>
    );
}

export default CreatePost;