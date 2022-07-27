import { formatDateAndTime } from "../utilities/utilities"

export default function CommentCard ({comment}) {

    const {formattedDate, formattedTime} = formatDateAndTime(comment.created_at)

    return (
        <div className="commentCard">
           <div className="voteCount">
                <p className="voteNumber">{comment.votes}</p>
                <p>votes</p>
                <button>Up</button>
                <button>Down</button>
            </div>
            <div className="commentCardText">
                <p>{comment.author} - {formattedTime} {formattedDate}</p>
                <p>{comment.body}</p>
            </div> 
            <button>Delete</button>
        </div>
    )
}