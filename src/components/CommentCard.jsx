import { formatDateAndTime } from "../utilities/utilities"

export default function CommentCard ({comment}) {

    const {formattedDate, formattedTime} = formatDateAndTime(comment.created_at)

    return (
        <div className="commentCard">
           <div className="commentVoteCount">
                <p className="commentVoteNumber">{comment.votes}</p>
                <p>votes</p>
                <div className="commentVoteButtons">
                    <button>Up</button>
                    <button>Down</button>
                </div>
            </div>
            <div className="commentCardText">
                <p>{comment.author} - <span className="reviewDateTime">{formattedTime} {formattedDate}</span> </p>
                <p>{comment.body}</p>
            </div> 
            <button className="commentDeleteButton">Delete</button>
        </div>
    )
}