import React from 'react';
import Posts from '../components/Posts'

const Homepage = ({loggedUser}) => {
    return (
        <div>
            <Posts
            loggedUser={loggedUser}
            />
        </div>
    )
}

export default Homepage