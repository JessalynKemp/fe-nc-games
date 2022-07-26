import { useEffect, useState, useContext } from "react"
import ReviewCard from "./ReviewCard";

import { CategoryContext } from "../contexts/CategoryContext";

export default function ReviewList () {
    
const axios = require("axios");
const [reviews, setReviews] = useState([]);
const {selectedCategory} = useContext(CategoryContext)

useEffect(() => {
    axios.get("https://nc-games-jk.herokuapp.com/api/reviews").then(({data}) => {
        const newReviews = data.reviews.filter((review) => {
            if(review.category === selectedCategory || selectedCategory === "all") {
                return review;
            }
        });
        setReviews(newReviews);
    })
}, [selectedCategory])

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