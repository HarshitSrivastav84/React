import { createContext } from "react";
import { useReducer } from "react";

const DEFAULT_POST_LIST = [{
    id: '1',
    title: 'Going to Mumbai',
    body: 'Hi friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.',
    reactions: 0,
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
}
];
// const DEFAULT_CONTEXT = {
//     postList: [],
//     addPost: () => {},
//     deletePost: () => {},
// };

export const PostList = createContext(
    {postList: [],
    addPost: () => {},
    deletePost: () => {},}
);

                            // Arguments
const postListReducer = (currPostList, action) => {
    return currPostList;
}

const PostListProvider = ({ children }) => {

    const [postList, dispatchPostList] =  useReducer(

        // Reducer function and default value
        postListReducer, DEFAULT_POST_LIST);

    const addPost = () => {

    }

    const deletePost = () => {

    }

    return <PostList.Provider value={
        // {postList: postList, addPost: addPost, deletePost: deletePost}
        // It gets value as postList and methods
        {postList, addPost, deletePost}
    }>
        {children}
    </PostList.Provider>
}


export default PostListProvider;