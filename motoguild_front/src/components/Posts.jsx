import Post from './Post'
import AddPost from "./AddPost"

const Posts = ({loggedUser, addPost, posts}) => {

    return(
        <>
            <AddPost loggedUser={loggedUser} addPost={addPost}/>
            {posts&&posts.map((post)=> (<Post key={post.id} post={post} />
            ))}
        </>
    )
}

export default Posts