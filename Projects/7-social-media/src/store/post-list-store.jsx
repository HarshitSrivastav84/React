import { createContext } from "react";
import { useReducer } from "react";

const DEFAULT_POST_LIST = [{
    id: '1',
    title: 'Going to Mumbai',
    body: 'Hi friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.',
    reactions: 2,
    userID: "user-9",
    tags: ["vacations", "Mumbai", "Enjoying"],
},
{
    id: "2",
    title: "Pass ho bhai",
    body: "4 saal ki masti ke baad bhi ho gaye hai pass. Hard to believe.",
    reactions: 15,
    userID: "user-12",
    tags: ["Graduating", "Unbelievable"],
},
];
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
    }
);

// Arguments
const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === "DELETE_POST") {
        newPostList = currPostList.filter(post => post.id !== action.payload.postID
        );
    }else if (action.type === "ADD_KARO_POST") {
        newPostList = [action.payload, ...currPostList];
    }
    return newPostList;
}

const PostListProvider = ({ children }) => {

    const [postList, dispatchPostList] = useReducer(

        // Reducer function and default value
        postListReducer, DEFAULT_POST_LIST);

    const addPost = (userID, postTitle, postBody, reactions, tags) => {
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
                reactions: reactions,
                userID: userID,
                tags: tags,
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
        { postList, addPost, deletePost }
    }>
        {children}
    </PostList.Provider>
}


export default PostListProvider;