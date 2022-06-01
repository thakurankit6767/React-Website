import React from "react";

const SearchResult = (props) => {
  const img = `https://api.unsplash.com/search/photos?${props.name}`;
  return (
    <div>
      <div>
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default SearchResult;
