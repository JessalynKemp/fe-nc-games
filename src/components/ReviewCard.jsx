import { Link } from "react-router-dom"
import { faPalette, faDice } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ReviewCard ({review}) {
    let category = review.category.split("-").join(" ");
    category = category[0].toUpperCase() + category.substr(1);


    return (
        <Link className="reviewCard" to={`/${review.category}/${review.review_id}`}>
            <div className="voteCount">
                <p className="voteNumber">{review.votes}</p>
                <p>votes</p>
            </div>
            <div className="reviewCardText">
                <div>
                <p className="cardTitle">{review.title}</p>
                <p className="cardOwner">{review.owner}</p>
                </div>
                <div className="cardDesignCategory">
                <p className="cardDesigner"><FontAwesomeIcon className="paletteIcon" icon={faPalette} /> {review.designer}</p>
                <p className="cardCategory"><FontAwesomeIcon className="diceIcon" icon={faDice} /> {category}</p>
                </div>
            </div>
        </Link>
    )
}