export default function Stats ({reviewData}) {

const date = new Date(reviewData.created_at)
let formattedDate = date.toLocaleDateString("en-GB");
let formattedTime = date.toLocaleTimeString(["en-GB"], {hour:"2-digit", minute: "2-digit"})

return <div className="statsBox">
    <p>{reviewData.owner} - {formattedTime} {formattedDate}</p>
    <div className="reviewVoteCount">
        <p>Votes: {reviewData.votes}</p>
        <button>Up</button>
        <button>Down</button>
    </div>
    <p>Category: {reviewData.category}</p>
    <p>Designer: {reviewData.designer}</p>
    <div className="reviewCommentCount">
        <p>Comments: {reviewData.comments}</p>
        <button>View comments</button>
    </div>
</div>
}

