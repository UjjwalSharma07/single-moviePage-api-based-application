import React from 'react'
import "./MovieCard.css"

const MovieCard = ({movie}) => {

    const{name,imdb_rating,genre,duration,img_link} = movie;
  return (
    <div className="card-container">
      <div className="card-img-container">
        <img className="card-img" src={img_link} alt="movie-card" />
      </div>
      <div className="card-details">
        <div>
            <span className="title">{name}</span>
        </div>
        <div>
            <span className="gener">Genre: {genre}</span>
        </div>
        <div className="ratings">
            <span> Rating: {imdb_rating}</span>
            <span>{duration} mins</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
