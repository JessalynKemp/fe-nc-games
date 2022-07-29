import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";

export default function ReviewList () {

const [reviews, setReviews] = useState([]);
const [sortBy, setSortBy] = useState("created_at");
const [order, setOrder] = useState("desc")
const [isAscDisabled, setIsAscDisabled] = useState(false);
const [searchParams, setSearchParams] = useSearchParams();
const [categoryDoesNotExist, setCategoryDoesNotExist] = useState("");
const [isLoading, setIsLoading] = useState(false);

const {category} = useParams();

useEffect(() => {
    const axios = require("axios");
    setIsLoading(true);
    axios.get("https://nc-games-jk.herokuapp.com/api/reviews", {params: {category, order, sort_by: sortBy}}).then(({data}) => {
        setIsLoading(false);
        setCategoryDoesNotExist("");
        setReviews(data.reviews);
    }).catch((err) => {
        setCategoryDoesNotExist(err.response.data.msg);
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
if(categoryDoesNotExist) {
    return <p>{categoryDoesNotExist}</p>
} else {
    
return(
    <div>
        <h2>{categoryName} Reviews</h2>
        <div className="reviewSortOptions">
            <div className="ascDescButtons">
                <button className="ascButton" onClick={handleAscDescChange} disabled={isAscDisabled}>ASC </button>
                <p>|</p>
                <button className="descButton" onClick={handleAscDescChange} disabled={!isAscDisabled}> DESC</button>
            </div>
            <div className="sortByOptions">
                <label className="sortByLabel">Sort by: </label>
                <select id="filters" onChange={handleSortByChange}>
                    <option defaultValue="created_at" value="created_at">Date written</option>
                    <option value="comment_count">Comment count</option>
                    <option value="votes">Vote count</option>
                </select>
            </div>
        </div>
    <div className="reviewList">
        {isLoading ? <p className="loadingMessage">Loading...</p> : reviews.map((review) => {
            return <ReviewCard key={review.review_id} review={review}/>
        })}
    </div>
    </div>
)
}

}