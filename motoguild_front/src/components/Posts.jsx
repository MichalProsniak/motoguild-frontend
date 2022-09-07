import Post from './Post'
import AddPost from "./AddPost"

const Posts = ({loggedUser, onAdd, posts}) => {

    return(
        <div>
            <AddPost loggedUser={loggedUser} addPost={onAdd}/>
            {posts&&posts.map((post)=> (<Post key={post.id} post={post} loggedUser={loggedUser}/>
            ))}
        </div>
    )
}

export default Posts