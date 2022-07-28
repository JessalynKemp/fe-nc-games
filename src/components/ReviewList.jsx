import { useEffect, useState } from "react"
import { Link, useParams, useSearchParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";

export default function ReviewList () {
    
const axios = require("axios");
const [reviews, setReviews] = useState([]);
const [sortBy, setSortBy] = useState("created_at");
const [order, setOrder] = useState("desc")
const [isAscDisabled, setIsAscDisabled] = useState(false);
const [searchParams, setSearchParams] = useSearchParams();

const {category} = useParams();

useEffect(() => {
    axios.get("https://nc-games-jk.herokuapp.com/api/reviews", {params: {category, order, sort_by: sortBy}}).then(({data}) => {
        setReviews(data.reviews);
    })
}, [category, order, sortBy])

let categoryName = category || "all"
categoryName = categoryName.split("-").join(" ") 
categoryName = categoryName[0].toUpperCase() + categoryName.substring(1);

function handleAscDescChange(e) {
    setOrder(e.target.outerText.toLowerCase());
    setIsAscDisabled((currAscDesc) => !currAscDesc);
    setSearchParams({order: e.target.outerText.toLowerCase(), sort_by: sortBy});

}

function handleSortByChange(e) {
    setSortBy(e.target.value);
    setSearchParams({order, sort_by: e.target.value});
}

return(
    <div>
        <h2>{categoryName} Reviews</h2>
        <div className="reviewSortOptions">
            <div className="ascDescButtons">
                <button onClick={handleAscDescChange} disabled={isAscDisabled}>Asc</button>
                <button onClick={handleAscDescChange} disabled={!isAscDisabled}>Desc</button>
            </div>
            <div className="sortByOptions">
                <label>Sort by: </label>
                <select id="filters" onChange={handleSortByChange}>
                    <option defaultValue="created_at" value="created_at">Date written</option>
                    <option value="comment_count">Comment count</option>
                    <option value="votes">Vote count</option>
                </select>
            </div>
        </div>
    <div className="reviewList">
        {reviews.map((review) => {
            return <ReviewCard key={review.review_id} review={review}/>
        })}
    </div>
    </div>
)
}