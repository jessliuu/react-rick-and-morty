import React, { useEffect, useState } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState();

  const fetchRecipes = async () => {
    const response = await fetch(
      "https://api.spoonacular.com/recipes/findByIngredients?apiKey=5bb2ba85e71141829b3107f5df442fce&ingredients=avocado&number=100"
    );
    const data = await response.json();
    setRecipes(data);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div>
      {recipes &&
        recipes.map((data) => {
          //   return (
          //     <div key={data.id}>
          return <p>{data.title}</p>;
          // </div>
          //   );
        })}
    </div>
  );
};

export default Recipes;
