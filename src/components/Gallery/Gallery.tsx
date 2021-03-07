import { useEffect, useState } from "react";
import apiKey from "../../giphy_api_key.json";
import loader from "./loader.svg";
import "./Gallery.css";

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
  const [state, setState] = useState({ error: null, gifs: [], loading: false });

  useEffect(() => {
    if (props.query) {
      setState({ error: null, gifs: [], loading: true });
      fetchGifs(props.query)
        .then((gifs) => setState({ error: null, gifs, loading: false }))
        .catch((e) => setState({ error: e.message, gifs: [], loading: false }));
    }
  }, [props.query]);

  return <div>{getContent(props.query, state)}</div>;
}

function getContent(
  query: string,
  state: { error: string | null; gifs: Gif[]; loading: boolean },
) {
  if (!query) {
    return "Type something ^";
  }
  if (state.error) {
    return `Error: ${state.error}`;
  }
  if (state.loading) {
    return <img className="loader" src={loader} alt="Loader" />;
  }
  if (state.gifs.length === 0) {
    return `No gifs found for query "${query}"`;
  }
  return state.gifs.map(({ title, url }) => (
    <img key={url} src={url} alt={title} />
  ));
}
