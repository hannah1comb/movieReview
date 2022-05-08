import React from "react";
import Movie from "./movie";

export default class MovieList extends React.Component {
    render() {

        let movies = [
            {
                title: "What's Eating Gilbert Grape ",
                image: "/images/gilbertgrape.jpg",
                plot: "Prepare to be emotionally damaged.",
                reviews: []
            },
            {
                title: "Steel Magnolias",
                image: "/images/steel.jpg",
                plot: "A lot of emotional damage.",
                reviews: []
            },
            {
                title: "The Breakfast Club",
                image: "/images/breakfast.jpg",
                plot: "Minor emotional damage.",
                reviews: []
            },
            {
                title: "Ferris Bueller's Day Off",
                image: "/images/ferris.jpg",
                plot: "No emotional damage. Unless you really like sports cars.",
                reviews: []
            }
        ]
        let arr;
        arr = movies.map( (movie, index ) => 
            <Movie title={movie.title} plot={movie.plot} reviews={movie.reviews} image={movie.image} key={index} id={index}/>
        )
        

        return(
            <div>
                { arr }
            </div>
        )
    } 
}