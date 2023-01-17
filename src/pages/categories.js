import styled from "styled-components";
import Choose from "../components/choose";
import DishCard from "../components/dishCard";
import { useState, useEffect } from "react";

const Container = styled.div`
  
`;

function Categories(){
    const [value, setValue] = useState('');
    const [categories, setCategories] = useState([]);
    const [dishes, setDishes] = useState([]);
    const categoryUrl = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
    const mealurl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

    const handleClick = (val)=>{
        setValue(val);
    }

    useEffect(()=>{
        fetch(categoryUrl)
        .then(res => res.json())
        .then(data => {
            setCategories(data.meals);
        })
    }, [])

    useEffect(()=>{
        fetch(mealurl + value)
        .then(res => res.json())
        .then(data => {
            setDishes(data.meals);
        })
    }, [value])

    return (
        <Container className='Categories flex-column'>
            <Choose 
                type='category' value={value} handleClick={handleClick}
                property = {categories}
            />
            {dishes !== null && (
                <div className='dish-list'>
                    {dishes.map((dish, index)=>(
                        <DishCard 
                            key={index} 
                            link={`/dish/${dish.idMeal}`} 
                            img={dish.strMealThumb}
                            name={dish.strMeal}
                            category={value}
                            displayCategory="block"
                            displayArea="none"
                        />
                    ))}
                </div>
            )}
        </Container>
    )
}

export default Categories;