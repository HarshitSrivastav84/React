import { useContext } from 'react';
import Post from './post';
import { PostList as PostListData } from '../store/post-list-store';

const PostList = () => {
                    // Name change see at import
    const {postList} = useContext(PostListData);

    return (
    <>
    {postList.map((post) => (
        <Post key={post.id} post={post} /> ))}



    {/* <Post></Post>
    <Post></Post>
    <Post></Post> */}
    </>
)
}


export default PostList;