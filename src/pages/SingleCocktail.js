import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          console.log(data);
          const {
            strDrink: name,
            strAlcoholic: info,
            strCategory: category,
            strDrinkThumb: img,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
          ];

          const newCocktail = {
            name,
            info,
            category,
            img,
            glass,
            instructions,
            ingredients,
          };
          console.log("--------------");
          console.log(newCocktail);
          setCocktail(newCocktail);
          setLoading(false);
        } else {
          setCocktail(null);
          setLoading(false);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return (
      <section className="my-section">
        <h2>No data found</h2>
      </section>
    );
  } else {
    const { name, info, category, img, glass, instructions, ingredients } =
      cocktail;
    return (
      <section className="my-section cocktail-section">
        <Link to="/" className="my-btn my-btn-primary">
          Back home
        </Link>
        <h2 className="my-section-title">{name}</h2>

        <div className="drink">
          <img src={img} alt={name} />
          <div className="drink-info">
            <p>
              <span className="drink-data">name:</span>
              {name}
            </p>
            <p>
              <span className="drink-data">category:</span>
              {category}
            </p>
            <p>
              <span className="drink-data">info:</span>
              {info}
            </p>
            <p>
              <span className="drink-data">glass:</span>
              {glass}
            </p>
            <p>
              <span className="drink-data">instructions:</span>
              {instructions}
            </p>
            <p>
              <span className="drink-data">Ingredients:</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}>{item},</span> : null;
              })}
            </p>
          </div>
        </div>
      </section>
    );
  }
};

export default SingleCocktail;
