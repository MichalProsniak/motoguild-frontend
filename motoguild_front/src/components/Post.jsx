import React from "react";
import Image from "react-bootstrap/Image";
import pictres from "../images/piesek.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Comments from "./Comments";
import AddComment from "./AddComment";
import { useState, useEffect } from "react";
import { getComments, createNewComment } from "../helpnigFunctions/ApiCaller";
import GetDayMonthYear from "../helpnigFunctions/GetDayMonthYear";
import GetHourMinutes from "../helpnigFunctions/GetHourMinutes";

const Post = ({post, loggedUser}) => {
    const [comments,setComments] = useState([])

    useEffect(()=>{
        const getComments = async () => {
          const commentsFromServer = await fetchComments()
          setComments(commentsFromServer)
        }
        getComments()
      },[])
    
      const addComment = async (comments) =>{
         try{
        const res = await fetch(`https://localhost:3333/api/post/${post.id}/comment`,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(comments)
        })
        const commentsFromServer = await fetchComments()
        setComments(commentsFromServer)
        console.log(comments)
        }
        catch (error){
            console.log(error)
        }
        }
        const fetchComments = async () =>{
            try{
            const res = await fetch(`https://localhost:3333/api/post/${post.id}/comment`)
            const data = await res.json()
            return data
            }
            catch (error){
                console.log(error)
            }
        }

          <AddComment loggedUser={loggedUser} addComment={addComment} />

          {!isLoading && comments.length > 0 && (
            <Comments comments={comments} />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Post;
