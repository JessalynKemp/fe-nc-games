import axios from "axios"
import { useState } from "react";

import CommentCard from "./CommentCard";

export default function CommentSection ({reviewData}) {

    const [comments, setComments] = useState([]);

    axios.get(`https://nc-games-jk.herokuapp.com/api/reviews/${reviewData.review_id}/comments`).then(({data}) => {
        setComments(data.comments);
    });;

    return (
        <div className="commentSection">
            <h4>Comments</h4>
            <p>{reviewData.comment_count}</p> 
            <div className="commentList">
            {comments.map((comment) => {
                return <CommentCard comment={comment}/>
            })}
            </div>

        </div>
    )
}
    