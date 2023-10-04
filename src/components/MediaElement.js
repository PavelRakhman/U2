import React from "react";
import "./MediaElement.css"
export function MediaElement({movie})
{
    return(
        <div className="MediaElement">
        <p className="MovieTitle">{movie.Title}</p>
        <p className="MovieYear">{movie.Year}</p>
        <img className="MoviePoster" src={movie.Poster} alt="poster"></img>
        <div className="controlls">
        <button className="AddToFavourites">Add to Favorites</button>
        </div>
        </div>
    )
}