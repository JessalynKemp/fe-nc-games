import Stats from "./Stats"

export default function Summary ({reviewData, votes, setVotes, setIsCommentsOpen, commentCount, category}) {

    return (
        <div className="singleReviewStatsAndImage">
            <Stats category={category} commentCount={commentCount} votes={votes} setVotes={setVotes} reviewData={reviewData} setIsCommentsOpen={setIsCommentsOpen}/>
            <div className="imageHolder">
                <img className="reviewImage" src={`${reviewData.review_img_url}`} alt={reviewData.title}></img>
            </div>
        </div>
    )
}