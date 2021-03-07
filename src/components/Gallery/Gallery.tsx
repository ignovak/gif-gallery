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
    .catch(() => {
      throw new Error("Network error");
    })
    .then((result) => {
      if (!result.data) {
        throw new Error(result.message);
      }
      return result.data.map(
        (item: {
          images: { preview_gif: { url: string } };
          title: string;
        }) => ({
          title: item.title,
          url: item.images.preview_gif.url,
        }),
      );
    });
}

export default function Gallery(props: { query: string }) {
  const [state, setState] = useState({ gifs: [], error: null });

  useEffect(() => {
    if (props.query) {
      fetchGifs(props.query)
        .then((gifs) => setState({ error: null, gifs }))
        .catch((e) => setState({ error: e.message, gifs: [] }));
    }
  }, [props.query]);

  return <div>{getContent(state)}</div>;
}

function getContent(state: { gifs: Gif[]; error: string | null }) {
  if (state.error) {
    return `Error: ${state.error}`;
  }
  return state.gifs.map((gif) => (
    <img key={gif.url} src={gif.url} alt={gif.title} />
  ));
}
