import axios from "axios";
import { useState } from "react";
import { formatDateAndTime } from "../utilities/utilities";

import { faThumbsUp, faThumbsDown, faPalette, faDice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Stats ({reviewData, votes, setVotes, setIsCommentsOpen, commentCount}) {

const {formattedDate, formattedTime} = formatDateAndTime(reviewData.created_at);
const [error, setError] = useState("")

function changeVote(num){
    axios.patch(`https://jk-nc-games.onrender.com/api/reviews/${reviewData.review_id}`, {inc_votes: num}).then(({data}) => {
        setError("");
        setVotes(data.review.votes);
    }).catch((err) => {
        setError("Your vote did not apply, please try again.")
    })
}


return <div className="statsBox">
    <p className="reviewCardOwner">{reviewData.owner}</p>
    <p className="reviewDateTime">{formattedTime} {formattedDate}</p>
    {error ? <p className="votingError">{error}</p> : <></>}
    <div className="reviewVoteCount">
        <p><span className="largeNumber">{votes}</span> votes</p>
        <div className="reviewVotingButtons">
            <button className="votingButton" onClick={() => {changeVote(1)}}><FontAwesomeIcon icon={faThumbsUp} className="thumb" /></button>
            <button className="votingButton" onClick={() => {changeVote(-1)}}><FontAwesomeIcon icon={faThumbsDown} className="thumb" /></button>
        </div>
    </div>
    <div className="reviewCommentCount">
        <p><span className="largeNumber">{commentCount}</span> comments</p>
        <button className="singleReviewButton" onClick={()=>{setIsCommentsOpen((currentOpen) => !currentOpen)}}>View</button>
    </div>
    <div className="reviewCategoryDesigner">
        <p><FontAwesomeIcon className="paletteIcon" icon={faPalette} /> {reviewData.category}</p>
        <p><FontAwesomeIcon className="diceIcon" icon={faDice} /> {reviewData.designer}</p>
    </div>
    
</div>
}

