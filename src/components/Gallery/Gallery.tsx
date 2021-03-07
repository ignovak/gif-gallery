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

export default function Gallery(props: { query: string }) {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetchGifs(props.query).then((gifs) => setState(gifs));
  }, [props.query]);

  return (
    <div>
      {state.map((gif: Gif, i) => (
        <img key={i} src={gif.url} alt={gif.title} />
      ))}
    </div>
  );
}
