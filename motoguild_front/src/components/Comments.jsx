import Comment from './Comment'
import Row from 'react-bootstrap/Row'

const Comments = ({comments }) => {
    return(
        <Row style={{border: '2px solid black'}}>
            {comments.map((comment)=> (<Comment key={comment.id} comment={comment} />
            ))}
        </Row>
    )
}

export default Comments