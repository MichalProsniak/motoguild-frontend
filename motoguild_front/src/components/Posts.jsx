import React from "react"

const Posts = ({posts}) => {
    return(
        <>
            {posts.map((post)=> {
                <h1>{post.content}</h1>
            })}
        </>
    )
}

export default Posts