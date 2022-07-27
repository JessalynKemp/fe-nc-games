import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"

import Summary from "./Summary";

export default function SingleReview () {
    const {review_id} = useParams();
    const [reviewData, setReviewData] = useState({});
    const [votes, setVotes] = useState(0);

    const navigate = useNavigate();
    
    useEffect(() => {axios.get(`https://nc-games-jk.herokuapp.com/api/reviews/${review_id}`).then(({data})=>{
        setReviewData(data.review);
        setVotes(data.review.votes);
    })}, [review_id])

    return(
        <>
        <div className="singleReviewTitle">
        <button type="button" className="exitReviewButton" onClick={()=> {navigate(-1)}}>Back</button>
        <h2>{reviewData.title}</h2>
        </div>
        <div className="singleReview">
        <Summary votes={votes} setVotes={setVotes} reviewData={reviewData}/>
        <p className="reviewBody">{reviewData.review_body}</p>
        </div>
        </>

    )

}