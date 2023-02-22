import "./App.css";
import "./index.js"




//Challenge 4
//EMPIEZAAAA


//TERMINAAAA
import React, { useState, useEffect } from 'react';

const GifGrid = () => {
  const [gifs, setGifs] = useState([]);

  const getGifs = async () => {
    const response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=eEufhiRhqRyc5888Bj80CEtTnWnI18ba&q=$%7Bcategory%7D&limit=15&offset=0&rating=g&lang=en');
    const data = await response.json();
    const gifs = data.data;
    setGifs(gifs);
    console.log(gifs);
  }

  useEffect(() => {
    getGifs();
  }, []);

  return (
    <div className="gif-grid">
      {gifs.map(gif => (
        <GifItem key={gif.id} gif={gif} />
      ))}
    </div>
  );
}

const GifItem = ({ gif }) => {
  return (
    <div className="gif-item">
      <h3>{gif.title}</h3>
    </div>
  );
}

export default GifGrid; 
/*


*/
//hola


