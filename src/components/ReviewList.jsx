import { useEffect, useState } from "react"
import ReviewCard from "./ReviewCard";
import { useContext } from "react";
import { CategoryContext } from "../contexts/SelectedCategory";

export default function ReviewList () {
    
const axios = require("axios");
const [reviews, setReviews] = useState([]);
const {selectedCategory} = useContext(CategoryContext);

useEffect(() => {
    axios.get("https://nc-games-jk.herokuapp.com/api/reviews").then(({data}) => {
        setReviews(data.reviews);
    })
}, [])
    

return(
    <div>
    <h2>{selectedCategory} Reviews</h2> 
    <div className="reviewList">
        {reviews.map((review) => {
            return <ReviewCard key={review.review_id} review={review}/>
        })}
    </div>
    </div>
)
}