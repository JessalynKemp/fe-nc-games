import Stats from "./Stats"
import { useNavigate } from "react-router-dom"

export default function Summary ({reviewData}) {
    const navigate = useNavigate();

    return (
        <div>
        <div className="singleReviewTitle">
            <button type="button" className="exitReviewButton" onClick={()=> {navigate(-1)}}>Back</button>
            <h2>{reviewData.title}</h2>
        </div>
        <div className="singleReviewStatsAndImage">
            <Stats reviewData={reviewData}/>
            <img className="reviewImage" src={`${reviewData.review_img_url}`} alt={`${reviewData.title}`}></img>
        </div>
        </div>
    )
}