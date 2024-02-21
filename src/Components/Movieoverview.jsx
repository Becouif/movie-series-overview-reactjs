import React, { useState } from "react";
import "./Assets/movie.css";

// https://www.omdbapi.com/?t=${this.enteredMovieName}&apikey=ec7b2d29    

function MovieOverview() {

  const [isLoading, setIsLoading] = useState(false);
  const [userSearch, setUserSearch] = useState("");
  const [sendUserSearch, setSendUserSearch] = useState("");
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
    setSendUserSearch(userSearch);
    if(userSearch.length <= 0){
      return alert("please enter text!!!")
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
      setIsLoading(true);
    })
    .catch(error => {
      alert("no movie was found!!! " + error);
    })
    }


    // start of if statement to check if there is value in movieInfo before sending data 




  }




  return (
    <div className="moviesearch">

      <div className="title">
        <h1>Movie Overview</h1>
      </div>
      <div className="search">
        <input name="search" onChange={handleChange} placeholder="enter movie name to search" value={userSearch} />
       
        <button onClick={handleSearch}>search</button>
      </div>

      
      {/* card section  */}
      { isLoading && (
        <div className="card">
          <figure className="card__img">
            <img src={movieInfo.img} width="340" height="280" alt={movieInfo.name} />
          </figure>
          <div className="card__desc">
            <p>name: <span className="item">{movieInfo.name}</span></p>
            <p>genre: <span className="item">{movieInfo.genre}</span></p>
            <p>year: <span className="item">{movieInfo.year}</span></p>
            <p>plot: <span className="item">{movieInfo.plot}</span></p>
            <p>released: <span className="item">{movieInfo.released}</span></p>
            <p>director: <span className="item">{movieInfo.director}</span></p>
            <p>country: <span className="item">{movieInfo.country}</span></p>
            <p>actor: <span className="item">{movieInfo.actor}</span></p>
            <p>writer: <span className="item">{movieInfo.writer}</span></p>
          </div>
        </div>
      )}


    </div>
  )
}

export default MovieOverview;