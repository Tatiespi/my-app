import "./App.css";
import "./index.js"



import React, { useState } from 'react';

function App() {
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const handleInputChange = (event) => {
    setCategory(event.target.value);
  };

  const addCategory = () => {
    setCategories([...categories, category]);
    setCategory('');
  };

  return (
    <div>
      <input
        type="text"
        value={category}
        onChange={handleInputChange}
      />
      <button onClick={addCategory}>Add Category</button>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;



