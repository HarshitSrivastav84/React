import { createContext } from "react";

const DEFAULT_CONTEXT = {
    postList: [],
    addPost: () => {},
    deletePost: () => {},
};

const PostList = createContext(DEFAULT_CONTEXT
    // {postList: [],
    // addPost: () => {},
    // deletePost: () => {},}
);

const postListReducer = (currPostList, action) => {
    return currPostList;
}

const PostListProvider = ({ children }) => {

    const [postList, dispatchPostList] =  useReducer(
        postListReducer,
        {postList: [], addPost, deletePost}
    );

    const addPost = () => {

    }

    const deletePost = () => {

    }

    return <PostList.Provider value={
        // {postList: postList, addPost: addPost, deletePost: deletePost}
        {postList, addPost, deletePost}
    }>
        {children}
    </PostList.Provider>
}

export default PostListProvider;