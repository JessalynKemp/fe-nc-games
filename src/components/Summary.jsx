import Stats from "./Stats"

export default function Summary ({reviewData, votes, setVotes}) {

    return (
        <div className="singleReviewStatsAndImage">
            <Stats votes={votes} setVotes={setVotes} reviewData={reviewData}/>
            <img className="reviewImage" src={`${reviewData.review_img_url}`} alt={`${reviewData.title}`}></img>
        </div>
    )
}