import Stats from "./Stats"

export default function Summary ({reviewData}) {
    return (
        <div>
        <div className="singleReviewTitle">
            <button>Back</button>
            <h2>{reviewData.title}</h2>
        </div>
        <div className="singleReviewStatsAndImage">
            <Stats reviewData={reviewData}/>
            <img className="reviewImage" src={`${reviewData.review_img_url}`} alt={`${reviewData.title}`}></img>
        </div>
        </div>
    )
}