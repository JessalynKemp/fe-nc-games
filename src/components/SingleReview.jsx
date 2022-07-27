import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"

import Summary from "./Summary";

export default function SingleReview () {
    const {review_id} = useParams();
    const [reviewData, setReviewData] = useState({})
    const navigate = useNavigate();
    
    useEffect(() => {axios.get(`https://nc-games-jk.herokuapp.com/api/reviews/${review_id}`).then(({data})=>{
        setReviewData(data.review);
    })}, [review_id])

    return(
        <>
        <div className="singleReviewTitle">
        <button type="button" className="exitReviewButton" onClick={()=> {navigate(-1)}}>Back</button>
        <h2>{reviewData.title}</h2>
        </div>
        <div className="singleReview">
        <Summary reviewData={reviewData}/>
        <p className="reviewBody">{reviewData.review_body}</p>
        </div>
        </>

    )

}