import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const searchValue = React.useRef("");
  const { setSearchTerm } = useGlobalContext();

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="my-section my-search">
      <form className="my-search-form" onSubmit={handleSubmit}>
        <div className="my-form-control">
          <label htmlFor="name">search your cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
