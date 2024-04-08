import React, { useState } from "react";

import "./Assets/movie.css";

// https://www.omdbapi.com/?t=${this.enteredMovieName}&apikey=ec7b2d29    

function MovieOverview() {

  const [isLoading, setIsLoading] = useState(true);
  const [userSearch, setUserSearch] = useState("");
  const [movieInfo, setMovieInfo] = useState({
    name: "",
    genre: "",
    year: "",
    plot: "",
    released: "",
    director: "",
    country: "",
    actor: "",
    writer: ""
  });

  const handleChange = (event) =>{
    const {__, value} = event.target;
    setUserSearch(value);
  }

  const handleSearch = () => {
    if(userSearch.length <= 0){
      console.log("no letter entered");
    }else {
    fetch(`https://www.omdbapi.com/?t=${userSearch}&apikey=ec7b2d29`)
    .then(res => {
      if(res.ok){
        return res.json();
        // console.log(res.json());
      }
    })
    .then(data =>{
      setMovieInfo({
        name: data.Title,
        genre: data.Genre,
        year: data.Year,
        plot: data.Plot,
        released: data.Released,
        director: data.Director,
        country: data.Country,
        actor: data.Actor,
        writer: data.Writer,
        img: data.Poster,
      });
    })
    }


    // start of if statement to check if there is value in movieInfo before sending data 




  }




  return (
    <div className="moviesearch">

      <div className="title">
        
        <a href="https://www.w3schools.com">Visit W3Schools.com!</a>
      </div>
      <div className="search">
        <input name="search" onChange={handleChange} placeholder="enter movie name to search" value={userSearch} />
        <button onClick={handleSearch}>search</button>
      </div>

      
      {/* card section  */}
      
      <div className="card">
        <figure className="card__img">
          <img src={movieInfo.img} width="340" height="280" alt={movieInfo.name} />
        </figure>
        <div className="card__desc">
          <p><span className="item">name: </span>{movieInfo.name}</p>
          <p><span className="item">genre: </span>{movieInfo.genre}</p>
          <p><span className="item">year: </span>{movieInfo.year}</p>
          <p><span className="item">plot: </span>{movieInfo.plot}</p>
          <p><span className="item">released: </span>{movieInfo.released}</p>
          <p><span className="item">director: </span>{movieInfo.director}</p>
          <p><span className="item">country: </span>{movieInfo.country}</p>
          <p><span className="item">actor: </span>{movieInfo.actor}</p>
          <p><span className="item">writer: </span>{movieInfo.writer}</p>
        </div>
      </div>
      

    </div>
  )
}

export default MovieOverview;