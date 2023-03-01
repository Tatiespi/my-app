import { UseFetchGifs } from "./useFetchGifs";
import { GifItem } from "./GifItem";

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=eEufhiRhqRyc5888Bj80CEtTnWnI18ba&q=${category}&limit=15&offset=0&rating=g&lang=en`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gifs;
};

export const Gift = ({ category }) => {
  const { images, isLoading } = UseFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image, key) => {
          return <GifItem key={key} {...image}></GifItem>;
        })}
      </div>
    </>
  );
};