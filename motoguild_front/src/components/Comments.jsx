import Comment from './Comment'
import AddComment from "./AddComment"

const Comments = ({postsId }) => {
    

    return(
        <>
            <AddComment loggedUser={loggedUser} addPost={onAdd}/>
            {posts&&posts.map((post)=> (<Comment key={post.id} post={post} />
            ))}
        </>
    )
}

export default Comments