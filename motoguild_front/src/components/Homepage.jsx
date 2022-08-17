import React from 'react';
import Posts from './Posts'

const Homepage = ({posts}) => {
    return (
        <div>
            <h1>HOMEPAGE!</h1>
            <Posts posts={posts} />
        </div>
    )
}

export default Homepage