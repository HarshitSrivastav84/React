import { useContext } from 'react';
import Post from './Post';
import { PostList as PostListData } from '../store/post-list-store';
import WelcomeMessage from './welcomeMessage';

const PostList = () => {
    // Name change see at import
    const { postList, addInitialPost } = useContext(PostListData);

    const handlePostClick = () => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => addInitialPost(data.posts));
    }

    return (
        <>
            {
                postList.length === 0 && <WelcomeMessage onPostClick={handlePostClick} />
            }
            {postList.map((post) => (
                <Post key={post.id} post={post} />))}



            {/* <Post></Post>
    <Post></Post>
    <Post></Post> */}
        </>
    )
}


export default PostList;