import { useEffect, useState } from "react";
import apiKey from "../../giphy_api_key.json";

export default function Gallery() {
  const [state, setState] = useState([]);
  const query = "cats";
  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10`,
    )
      .then((response) => response.json())
      .then((result) =>
        result.data.map(
          (item: { images: { preview_gif: { url: string } } }) =>
            item.images.preview_gif.url,
        ),
      )
      .then((urls) => setState(urls));
  }, [query]);

  return (
    <div>
      {state.map((image, i) => (
        <img key={i} src={image} alt={image} />
      ))}
    </div>
  );
}
