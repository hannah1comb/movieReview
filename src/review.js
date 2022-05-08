import React from "react";
import StarRating from "./starRating";

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: props.reviews
        }
    }

    render() {
        let reviewsArray;
        if (this.state.reviews) {
            reviewsArray = this.state.reviews.map( (review, index) => 
            <li className="list-group-item" key={index}>{review.text} - Number of Stars: {review.starRating}</li>
            )
        }
        return (
          <div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Reviews</strong>
              </li>
              {reviewsArray}
            </ul>
          </div>
        ); 
    }
}