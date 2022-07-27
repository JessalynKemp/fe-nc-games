import { formatDateAndTime } from "../utilities/utilities";

export default function Stats ({reviewData}) {

const {formattedDate, formattedTime} = formatDateAndTime(reviewData.created_at);

return <div className="statsBox">
    <p className="reviewCardOwner">{reviewData.owner}</p>
    <p className="reviewDateTime">{formattedTime} {formattedDate}</p>
    <div className="reviewVoteCount">
        <p>Votes: {reviewData.votes}</p>
        <div className="reviewVotingButtons">
            <button>Up</button>
            <button>Down</button>
        </div>
    </div>
    <div className="reviewCategoryDesigner">
        <p>C: {reviewData.category}</p>
        <p>D: {reviewData.designer}</p>
    </div>
    <div className="reviewCommentCount">
        <p>Comments: {reviewData.comment_count}</p>
        <button>View</button>
    </div>
</div>
}

