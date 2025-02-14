import React, { useState } from 'react'


const App = () => {

  const [movies, setMovies] = useState(
    {
      title: "The Godfather",
      ratings: 7.2
    }
    // {
    //   title: "The Shawshank Redemption",      
    //   ratings: 8.6
    // },
    // {
    //   title: "Forrest Gump",
    //   ratings: 4.3
    // },
  );

  const updateRatings = () => {
    const updatedMovies = {
      ...movies,
      ratings: 8.2
    }

    setMovies(updatedMovies);
  }

  return (
    <div>
      <h1>My Favorite Movies</h1>
      <li>{movies.title}</li>
      <li>{movies.ratings}</li>

      <button onClick={updateRatings}>Update Movie Ratings</button>
    </div>
  );
}

export default App