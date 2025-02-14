import React, { useState } from 'react'


const App = () => {

  const [movies, setMovies] = useState([
    { id: 1,
      title: "The Godfather",
      ratings: 7.2
    },
    { id: 2, 
      title: "The Shawshank Redemption",      
      ratings: 8.6
    },
    { id: 3,
      title: "Forrest Gump",
      ratings: 4.3
    },
  ]);

  const updateName = () => {
    setMovies(
      movies.map((m)=>(m.id === 2 ? {...movies, title: "John Wick 4"} : m))
    )
  }
  

  return (
    <div>
      {movies.map((m) => (
        <li key={Math.random()}>{m.title}</li>
      ))}
      <button onClick={updateName}>Change Name</button>
    </div>
  );
}

export default App