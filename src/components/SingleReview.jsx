import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Summary from "./Summary";
import CommentSection from "./CommentSection";

export default function SingleReview () {
    const {review_id,category} = useParams();
    const [reviewData, setReviewData] = useState({});
    const [votes, setVotes] = useState(0);
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);
    const [commentCount, setCommentCount] = useState(0);
    const [reviewDoesNotExist, setReviewDoesNotExist] = useState("")
    const [categoryDoesNotExist, setCategoryDoesNotExist] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://jk-nc-games.onrender.com/api/reviews/${review_id}`).then(({data})=>{
        if(data.review.category === category) {
            setIsLoading(false);
            setCategoryDoesNotExist("");
            setReviewDoesNotExist("");
            setReviewData(data.review);
            setVotes(data.review.votes);
            setCommentCount(data.review.comment_count);
        } else {
            setIsLoading(false);
            setCategoryDoesNotExist(`This review does not exist under the category of ${category}.`)
        }
    }).catch((err) => {
        setIsLoading(false);
        setReviewDoesNotExist(err.response.data.msg);
    })}, [review_id, category])

    if(isLoading) {
        return <p className="loadingMessage" >Loading...</p>
    } else if(reviewDoesNotExist) {
        return <p className="errorMessage">{reviewDoesNotExist}</p>
    } else if(categoryDoesNotExist) {
        return <p className="errorMessage">{categoryDoesNotExist}</p>
    } 
    else {    
        return(
        <>
        <div className="singleReviewTitle">
        <button type="button" className="exitReviewButton" onClick={()=> {navigate(-1)}}><FontAwesomeIcon icon={faArrowLeft} /></button>
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