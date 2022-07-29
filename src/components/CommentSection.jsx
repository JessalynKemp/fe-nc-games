import axios from "axios"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";

import CommentCard from "./CommentCard";

export default function CommentSection ({reviewData, commentCount, setCommentCount}) {

    const {username} = useContext(UserContext);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({username, body:""});
    const [error, setError] = useState("");
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://nc-games-jk.herokuapp.com/api/reviews/${reviewData.review_id}/comments`).then(({data}) => {
        setIsLoading(false);
        setComments(data.comments);
    })}, [reviewData.review_id]);

    function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitDisabled(true);
        setError("");
        if(newComment.body === "") {
            setError("Please ensure your comment is not blank.")
            setTimeout(() => {setIsSubmitDisabled(false)}, 1000);
        } else {       
            axios.post(`https://nc-games-jk.herokuapp.com/api/reviews/${reviewData.review_id}/comments`, newComment).then(({data}) => {
                setNewComment((currComment) => { return{...currComment, body: ""}})
                setCommentCount(commentCount + 1);
                setComments((currComments) => {return [data.comment, ...currComments]});
                setTimeout(() => {setIsSubmitDisabled(false)}, 1000);
            }).catch((err) => {
                setError("Comment failed to post.");
                setComments((currComments) => {
                    const failedCommentRemoved = [...currComments]
                    failedCommentRemoved.shift();
                    return failedCommentRemoved;
                });
                setTimeout(() => {setIsSubmitDisabled(false)}, 1000);
            })
        }
    }

    if(isLoading){
        return (
            <div className="commentSection">
                <div className="commentTitleAndCount">
                    <h4>Comments</h4>
                    <p>{commentCount}</p> 
                </div>
            <p className="loadingMessage">Loading...</p>    
            </div>
        )
    } else {
        return (
            <div className="commentSection">
                <div className="commentTitleAndCount">
                    <h4>Comments</h4>
                    <p>{commentCount}</p> 
                </div>
                <div>
                    {error ? <p className="errorMessage">{error}</p> : <></>}
                    <form className="addNewComment" onSubmit={handleSubmit}>
                        <fieldset className="newCommentContainer">
                            <input className="newCommentBox" placeholder="Type your comment here..." type="text" value={newComment.body} onChange={(e) => setNewComment((currComment) => { return{...currComment, body: e.target.value}})}></input>
                            <button className="singleReviewButton" type="submit" disabled={isSubmitDisabled}>Post</button>
                        </fieldset>
                    </form>
                </div>
                <div className="commentList">
                {comments.map((comment) => {
                    return <CommentCard setComments={setComments} setCommentCount={setCommentCount} key={comment.comment_id} comment={comment} />
                })}
                </div>
            </div>
        )
    }

    
}
    