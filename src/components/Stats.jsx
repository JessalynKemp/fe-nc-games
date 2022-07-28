import axios from "axios";
import { useState } from "react";
import { formatDateAndTime } from "../utilities/utilities";

export default function Stats ({reviewData, votes, setVotes, setIsCommentsOpen, commentCount}) {

const {formattedDate, formattedTime} = formatDateAndTime(reviewData.created_at);
const [error, setError] = useState("")

function changeVote(num){
    axios.patch(`https://nc-games-jk.herokuapp.com/api/reviews/${reviewData.review_id}`, {inc_votes: num}).then(({data}) => {
        setError("");
        setVotes(data.review.votes);
    }).catch((err) => {
        setError("Your vote did not apply, please try again.")
    })
}


return <div className="statsBox">
    <p className="reviewCardOwner">{reviewData.owner}</p>
    <p className="reviewDateTime">{formattedTime} {formattedDate}</p>
    <div className="reviewVoteCount">
        <p>Votes: {votes}</p>
        <div className="reviewVotingButtons">
            <button className="votingButton" onClick={() => {changeVote(1)}}>Up</button>
            <button className="votingButton" onClick={() => {changeVote(-1)}}>Down</button>
        </div>
    </div>
    {error ? <p className="votingError">{error}</p> : <></>}
    <div className="reviewCategoryDesigner">
        <p>C: {reviewData.category}</p>
        <p>D: {reviewData.designer}</p>
    </div>
    <div className="reviewCommentCount">
        <p>Comments: {commentCount}</p>
        <button onClick={()=>{setIsCommentsOpen((currentOpen) => !currentOpen)}}>View</button>
    </div>
</div>
}

