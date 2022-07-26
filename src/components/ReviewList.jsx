import { useEffect, useState } from "react"
import ReviewCard from "./ReviewCard";

export default function ReviewList () {

const axios = require("axios");
const [reviews, setReviews] = useState([]);

useEffect(() => {
    axios.get("https://nc-games-jk.herokuapp.com/api/reviews").then((response) => {
        return response.data.reviews;
    }).then((reviewsData) => {
        setReviews(reviewsData);
    })
}, [])
    

return(
    <div>
    <h2>Reviews</h2> 
    <div className="reviewList">
        {reviews.map((review) => {
            return <ReviewCard key={review.review_id} review={review}/>
        })}
    </div>
    </div>
)
}