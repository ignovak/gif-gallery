import { useEffect, useState } from "react";
import apiKey from "../../giphy_api_key.json";

interface Gif {
  title: string;
  url: string;
}

function fetchGifs(query: string) {
  return fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10`,
  )
    .then((response) => response.json())
    .then((result) =>
      result.data.map(
        (item: {
          images: { preview_gif: { url: string } };
          title: string;
        }) => ({
          title: item.title,
          url: item.images.preview_gif.url,
        }),
      ),
    );
}

export default function Gallery() {
  const [state, setState] = useState([]);
  const query = "cats";

  useEffect(() => {
    fetchGifs(query).then((gifs) => setState(gifs));
  }, [query]);

  return (
    <div>
      {state.map((gif: Gif, i) => (
        <img key={i} src={gif.url} alt={gif.title} />
      ))}
    </div>
  );
}
