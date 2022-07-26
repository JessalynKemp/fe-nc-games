import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";

export default function ReviewList () {
    
const axios = require("axios");
const [reviews, setReviews] = useState([]);

const {category} = useParams();

useEffect(() => {
    axios.get("https://nc-games-jk.herokuapp.com/api/reviews", {params: {category}}).then(({data}) => {
        setReviews(data.reviews);
    })
}, [category])

let categoryName = category || "all"
categoryName = categoryName.split("-").join(" ") 
categoryName = categoryName[0].toUpperCase() + categoryName.substring(1);

return(
    <div>
    <h2>{categoryName} Reviews</h2> 
    <div className="reviewList">
        {reviews.map((review) => {
            return <ReviewCard key={review.review_id} review={review}/>
        })}
    </div>
    </div>
)
}