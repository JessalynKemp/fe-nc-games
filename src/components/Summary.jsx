import Stats from "./Stats"

export default function Summary ({reviewData}) {

    return (
        <div className="singleReviewStatsAndImage">
            <Stats reviewData={reviewData}/>
            <img className="reviewImage" src={`${reviewData.review_img_url}`} alt={`${reviewData.title}`}></img>
        </div>
    )
}