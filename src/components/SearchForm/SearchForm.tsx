import { useState } from "react";

export default function SearchForm(props: {
  query: string;
  onSubmit: (query: string) => void;
}) {
  const [query, setQuery] = useState(props.query);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit(query);
      }}
    >
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <input type="submit" />
    </form>
  );
}
