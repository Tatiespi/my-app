import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { Gift } from "./components/Gift";

export const Hooks = () => {
  const [categories, setCategories] = useState([""]);

  const onAddCategory = (category) => {
    setCategories((list) => [...list, category]);
  };

  return (
    <>
      <h1>GifExpert</h1>
      <AddCategory onAddCategory={onAddCategory} />
      {categories.map((category, key) => {
        return <Gift category={category} key={key} />;
      })}
    </>
  );
};

export default Hooks;
  