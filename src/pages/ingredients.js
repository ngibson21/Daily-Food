import styled from "styled-components";
import { useEffect, useState } from "react";
import DishCard from "../components/dishCard";
import SearchBar from "../components/searchBar";

const Container = styled.div`
  padding: 8rem 10%;
  gap: 3.5rem;
  align-items: flex-start;
  .loading {
    margin-top: 6rem;
  }
  .SearchBar {
    width: 100%;
  }

   @media (max-width: 480px) {
    padding: 9rem 10%;
   }
`;

function Ingredients(){
    const [search, setSearch] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [recipe, setRecipe] = useState([]);
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

    useEffect(()=>{
        fetch(url + search)
        .then(res => res.json())
        .then(data => {
            setRecipe(data.meals);
            setLoaded(true);
        })
    }, [search])

    return (
        <Container className="Ingredients flex-column">
            <SearchBar value={search} onChange={(e)=>setSearch(e.target.value)} />
            {loaded ? (
                recipe ? (
                    <div className="dish-list">
                        {recipe.map((row)=>(
                            <DishCard
                                key={row.idMeal}
                                link={`/dish/${row.idMeal}`}
                                img={row.strMealThumb}
                                name={row.strMeal}
                                displayCategory="block"
                                displayArea="block"
                                category={row.strCategory}
                                area={row.strArea}
                            />
                        ))}
                    </div>
                ) : (
                    <h1 className="error">Sorry, your recipe is not found...</h1>
                )
            ) : (
                <h1 className="loading">Recipe is loading now...</h1>
            )}
        </Container>
    )
}

export default Ingredients;