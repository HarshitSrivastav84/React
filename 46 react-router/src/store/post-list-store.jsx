import { createContext } from "react";
import { useReducer } from "react";


// const DEFAULT_CONTEXT = {
//     postList: [],
//     addPost: () => {},
//     deletePost: () => {},
// };

export const PostList = createContext(
    {
        postList: [],
        addPost: () => { },
        deletePost: () => { },
        addInitialPost: () => { }
    }
);

// Arguments
const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === "DELETE_POST") {
        newPostList = currPostList.filter(post => post.id !== action.payload.postID
        );
    } else if (action.type === "ADD_KARO_POST") {
        newPostList = [action.payload, ...currPostList];
    } else if (action.type === "ADD_INITIAL_POSTS") {
        newPostList = action.payload.posts;
    }
    return newPostList;
}

const PostListProvider = ({ children }) => {

    const [postList, dispatchPostList] = useReducer(

        // Reducer function and default value
        postListReducer, []);

    // const addPost = (userID, postTitle, postBody, reactions, tags) => {
    const addPost = (post) => {
        // console.log(`Adding post with userID: ${userID}`);
        // console.log(`Adding post with title: ${postTitle}`);
        // console.log(`Adding post with body: ${postBody}`);
        // console.log(`Adding post with reactions: ${reactions}`);
        // console.log(`Adding post with tags: ${tags}`);
        dispatchPostList({
            type: "ADD_KARO_POST",
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions,
                userID,
                tags,
            }
        })
    }

    // For mass change in the posts
    const addInitialPost = (posts) => {
        dispatchPostList({
            type: "ADD_INITIAL_POSTS",
            payload: {
                posts: posts
            }
        })
    }

    const deletePost = (postID) => {
        // console.log(`Delete post with ID:  ${postID}`);
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postID: postID
            }
        })
    }

    return <PostList.Provider value={
        // {postList: postList, addPost: addPost, deletePost: deletePost}
        // It gets value as postList and methods
        { postList, addPost, deletePost, addInitialPost }
    }>
        {children}
    </PostList.Provider>
}


export default PostListProvider;