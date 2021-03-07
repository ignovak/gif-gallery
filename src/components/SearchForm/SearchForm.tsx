import { useState } from "react";
import "./SearchForm.css";

export default function SearchForm(props: {
  query: string;
  onSubmit: (query: string) => void;
}) {
  const [query, setQuery] = useState(props.query);
  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit(query);
      }}
    >
      <input
        className="form-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <input className="form-submit" type="submit" value="Search" />
    </form>
  );
}
