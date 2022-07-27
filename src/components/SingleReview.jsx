import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Summary from "./Summary";

export default function SingleReview () {
    const {review_id} = useParams();
    const [reviewData, setReviewData] = useState({})
    
    useEffect(() => {axios.get(`https://nc-games-jk.herokuapp.com/api/reviews/${review_id}`).then(({data})=>{
        setReviewData(data.review);
    })}, [review_id])

    return(
        <div className="singleReview">
        <Summary reviewData={reviewData}/>
        <p>{reviewData.review_body}</p>
        </div>

    )

}