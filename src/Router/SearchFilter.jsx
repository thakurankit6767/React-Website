import React, { useState } from "react";
import SearchResult from "./SearchResult";

const SearchFilter = () => {
  const [img, setImg] = useState("");
  const inputEvent = (event) => {
    const data = event.target.value;
    console.log(data);
    setImg(data);
  };

  return (
    <div>
      <h3>Search</h3>
      <input
        type="text"
        placeholder="search anything"
        onChange={inputEvent}
        value={img}
      />
      {img === "" ? null : <SearchResult name={img} />}
    </div>
  );
};

export default SearchFilter;
