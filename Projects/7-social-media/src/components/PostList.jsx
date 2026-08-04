import { useContext, useState } from 'react';
import Post from './Post';
import { PostList as PostListData } from '../store/post-list-store';
import WelcomeMessage from './welcomeMessage';
import { useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';

const PostList = () => {
    // Name change see at import
    const { postList, addInitialPost } = useContext(PostListData);

    const [fetching, setFetching] = useState(false);

    // It makes large no. of calls to the server as it is not given anything in the second argument
    // useEffect(() => {
    //     fetch('https://dummyjson.com/posts')
    //         .then(res => res.json())
    //         .then(x => addInitialPost(x.posts));
    // })

    // No dependency, so called only once
    useEffect(() => {
        setFetching(true);
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(x => {
                addInitialPost(x.posts)
                setFetching(false);
            });
        return () => {
            console.log("Cleaning up useEffect");
        }
    }, []);

    const handlePostClick = () => {
        // No need as using useEffect
    }

    return (
        <>
            {fetching && <LoadingSpinner />}
            {!fetching && postList.length === 0 && <WelcomeMessage onPostClick={handlePostClick} />}
            {!fetching && postList.map((post) => (
                <Post key={post.id} post={post} />))}



            {/* <Post></Post>
    <Post></Post>
    <Post></Post> */}
        </>
    )
}


export default PostList;