import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"

import Summary from "./Summary";
import CommentSection from "./CommentSection";

export default function SingleReview () {
    const {review_id} = useParams();
    const [reviewData, setReviewData] = useState({});
    const [votes, setVotes] = useState(0);
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);
    const [commentCount, setCommentCount] = useState(0);
    const [reviewDoesNotExist, setReviewDoesNotExist] = useState("")

    const navigate = useNavigate();
    
    useEffect(() => {axios.get(`https://nc-games-jk.herokuapp.com/api/reviews/${review_id}`).then(({data})=>{
        setReviewDoesNotExist("")
        setReviewData(data.review);
        setVotes(data.review.votes);
        setCommentCount(data.review.comment_count);
    }).catch((err) => {
        setReviewDoesNotExist(err.response.data.msg);
    })}, [review_id])

    if(reviewDoesNotExist) {
        return <p>{reviewDoesNotExist}</p>
    } else {    
        return(
        <>
        <div className="singleReviewTitle">
        <button type="button" className="exitReviewButton" onClick={()=> {navigate(-1)}}>Back</button>
        <h2>{reviewData.title}</h2>
        </div>
        <div className="singleReview">
        <Summary votes={votes} setVotes={setVotes} commentCount={commentCount} setIsCommentsOpen={setIsCommentsOpen} reviewData={reviewData}/>
            <div className="reviewBodyAndComments">
                <p className="reviewBody">{reviewData.review_body}</p>
                {isCommentsOpen ? <CommentSection commentCount={commentCount} setCommentCount={setCommentCount} reviewData={reviewData} /> : <></>}
            </div>
        </div>
        </>
    )}


}