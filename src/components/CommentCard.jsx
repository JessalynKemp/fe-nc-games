import { formatDateAndTime } from "../utilities/utilities"
import { UserContext } from "../contexts/User";
import { useContext, useState } from "react";
import axios from "axios";

export default function CommentCard ({comment, setComments, setCommentCount}) {

    const {formattedDate, formattedTime} = formatDateAndTime(comment.created_at)
    const {username} = useContext(UserContext);

    function handleCommentDelete(e) {
        setComments((currComments) => {
            const newComments = [...currComments];
            let index = newComments.indexOf(comment);
            newComments.splice(index, 1);
            return newComments;
        })
        setCommentCount((currCount) => currCount - 1)
        axios.delete(`https://jk-nc-games.onrender.com/api/comments/${comment.comment_id}`).then(() => {
        }).catch((err) => {
            setComments((currComments) => {
                return [...currComments, comment];
            })
            setCommentCount((currCount) => currCount + 1)
        })
    }

    return (
        <div className="commentCard">
           <div className="commentVoteCount">
                <p className="commentVoteNumber">{comment.votes}</p>
                <p>votes</p>
            </div>
            <div className="commentCardText">
                <p>{comment.author} - <span className="reviewDateTime">{formattedTime} {formattedDate}</span> </p>
                <p>{comment.body}</p>
            </div> 
            {username === comment.author ? <button className="commentDeleteButton singleReviewButton" onClick={handleCommentDelete}>Delete</button> : <></>}
        </div>
    )
}