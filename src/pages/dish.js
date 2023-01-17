import styled from "styled-components";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import DishDetails from "../components/dishDetails";

const Container = styled.div`
  padding: 5rem 10%;
`;


function Dish(){
    const {id} = useParams();
    const [dish, setDish] = useState([]);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`;
    
    useEffect(()=>{
        fetch(url + id)
        .then(res => res.json())
        .then(data => {
            setDish(data.meals[0])
        })
    }, [id, url]);

    const Arr = Object.entries(dish);
    const ingredientArr = Arr.filter(([key, value]) => key.includes("strIngredient") && value !== "");
    const measureArr = Arr.filter(([key, value]) => key.includes("strMeasure") && value !== "");

    const tags = String(dish.strTags).replaceAll(",", ", ");

    return (
        <Container>
            <DishDetails 
                img={dish.strMealThumb}
                name={dish.strMeal}
                ingredients={ingredientArr.map((row, index)=>(
                    <li key={index}>{row[1]}</li>
                ))}
                measures={measureArr.map((row, index)=>(
                    <li key={index}>{row[1]}</li>
                ))}
                area={dish.strArea}
                category={dish.strCategory}
                youtube={dish.strYoutube}
                instructions={dish.strInstructions}
                tags={tags}
            />
        </Container>
    )
}

export default Dish;