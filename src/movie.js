import React from 'react';
import ReviewButton from './review-button';
import ReviewList from './review-list';
export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            title: props.title,
            image: props.image,
            plot: props.plot,
            reviews: props.reviews
        }
        this.setReviews = this.setReviews.bind(this)
    }
    
    setReviews(e) {
        let rating = e.target.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.getAttribute('data-rating');
        let text = e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.value
        let newReview = {text: text, starRating: rating}
        this.setState( state => {
            if ( state.title === e.target.name ) {
                console.log(state.reviews)
                console.log(newReview)
                state.reviews.push(newReview)
                return {reviews: state.reviews }
            }
        })

    }

    render() {
        return(
            <div className="row my-5">
                <div className="card mx-auto" style={{ width: "80%" }}>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.title}</h5>
                        <p className="card-text">
                            <img src={this.state.image} alt="iron man" /><br />{this.state.plot}</p>
                    </div>
                    <ReviewList reviews={this.state.reviews} />
                    <ReviewButton onClick={ (e) => this.setReviews(e) } name={this.state.title} id={this.state.id}/>
                </div>
            </div>
        ) 
    }
}

