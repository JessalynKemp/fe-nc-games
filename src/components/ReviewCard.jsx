export default function ReviewCard ({review}) {
    return (
        <div className="reviewCard">
            <div className="voteCount">
                <p>{review.votes}</p>
            </div>
            <div className="reviewCardText">
                <h3>{review.title}</h3>
                <p>{review.owner}</p>
                <p>{review.designer}</p>
                <p>{review.category}</p>
            </div>
        </div>
    )
}