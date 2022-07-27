import axios from "axios"
import { useEffect, useState } from "react";

import CommentCard from "./CommentCard";

export default function CommentSection ({reviewData}) {

    const [comments, setComments] = useState([]);

    useEffect(() => {axios.get(`https://nc-games-jk.herokuapp.com/api/reviews/${reviewData.review_id}/comments`).then(({data}) => {
        setComments(data.comments);
    })}, [reviewData.review_id]);

    return (
        <div className="commentSection">
            <div className="commentTitleAndCount">
                <h4>Comments</h4>
                <p>{reviewData.comment_count}</p> 
            </div>
            <div className="commentList">
            {comments.map((comment) => {
                return <CommentCard key={comment.comment_id} comment={comment}/>
            })}
            </div>

        </div>
    )
}
    