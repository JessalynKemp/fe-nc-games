export default function ReviewCard ({review}) {
    return (
        <div className="reviewCard">
            <div className="voteCount">
                <p className="voteNumber">{review.votes}</p>
                <p>votes</p>
            </div>
            <div className="reviewCardText">
                <p className="cardTitle">{review.title}</p>
                <p className="cardOwner">{review.owner}</p>
                <br></br>
                <p className="cardDesigner">Designer: {review.designer}</p>
                <p className="cardCategory">Category: {review.category}</p>
            </div>
        </div>
    )
}