import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [cacheResult, setCacheResult] = useState({});

  const fetchData = async () => {
    if (cacheResult[searchText]) {
      setSearchResult(cacheResult[searchText]);
      console.log("using cache");
      return;
    }
    try {
      console.log("using API");
      let data = await fetch(
        `https://dummyjson.com/recipes/search?limit=15&q=${searchText}`
      );
      let result = await data.json();
      setSearchResult(result.recipes);
      if (!cacheResult[searchText]) {
        setCacheResult((prev) => {
          return { ...prev, [searchText]: result.recipes };
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let timer = setTimeout(fetchData, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  return (
    <>
      <div className="searchBar">
        <input
          className="searchInput"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setSearchActive(true)}
          onBlur={() => setSearchActive(false)}
        ></input>
      </div>
      <div className="searchResult">
        {searchActive &&
          searchResult.map((item, index) => {
            return (
              <span className="searchItem" key={item.id}>
                {item.name}
              </span>
            );
          })}
      </div>
    </>
  );
};

export default SearchBar;
