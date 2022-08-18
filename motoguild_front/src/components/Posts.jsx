import Post from './Post'
import AddPost from "./AddPost"

const Posts = ({loggedUser, onAdd, posts}) => {

    return(
        <>
            <AddPost loggedUser={loggedUser} addPost={onAdd}/>
            {posts&&posts.map((post)=> (<Post key={post.id} post={post} />
            ))}
        </>
    )
}

export default Posts