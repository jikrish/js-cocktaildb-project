import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className="my-section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }
  console.log(cocktails);
  return (
    <section>
      <h2 className="my-section-title">cocktails</h2>
      <div className="my-cocktail-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;