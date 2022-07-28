import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";

export default function ReviewList () {
    
const axios = require("axios");
const [reviews, setReviews] = useState([]);
const [sortBy, setSortBy] = useState("");
const [order, setOrder] = useState("desc")
const [isAscDisabled, setIsAscDisabled] = useState(false);

const {category} = useParams();

useEffect(() => {
    axios.get("https://nc-games-jk.herokuapp.com/api/reviews", {params: {category, order}}).then(({data}) => {
        setReviews(data.reviews);
    })
}, [category, order])

let categoryName = category || "all"
categoryName = categoryName.split("-").join(" ") 
categoryName = categoryName[0].toUpperCase() + categoryName.substring(1);

function handleAscDescChange(e) {
    setOrder(e.target.outerText.toLowerCase());
    setIsAscDisabled((currAscDesc) => !currAscDesc);
}

function handleSortByChange(e) {

}


return(
    <div>
        <div className="reviewTitleAndFilters">
        <h2>{categoryName} Reviews</h2> 
        <button onClick={handleAscDescChange} disabled={isAscDisabled}>Asc</button>
        <button onClick={handleAscDescChange} disabled={!isAscDisabled}>Desc</button>
        <label>Filter by:</label>
        <select>
            <option defaultValue="created_by">Date</option>
            <option value="comment_count">Comment count</option>
            <option value="votes">Vote count</option>
        </select>
        </div>
    <div className="reviewList">
        {reviews.map((review) => {
            return <ReviewCard key={review.review_id} review={review}/>
        })}
    </div>
    </div>
)
}