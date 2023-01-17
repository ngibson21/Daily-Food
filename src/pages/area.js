import {useState, useEffect} from 'react'
import Choose from '../components/choose';
import DishCard from '../components/dishCard';
import styled from 'styled-components';

const Container = styled.div`
  
`;

function Area(){
    const [value, setValue] = useState('');
    const [areas, setAreas] = useState([]);
    const [dishes, setDishes] = useState([]);
    const areaUrl = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
    const mealurl = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";

    const handleClick = (val)=>{
        setValue(val);
    }

    useEffect(()=>{
        fetch(areaUrl)
        .then(res => res.json())
        .then(data => {
            setAreas(data.meals);
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
        <Container className='Area flex-column'>
            <Choose 
                type='area' value={value}
                property = {areas}
                handleClick = {handleClick}
            />
            {dishes !== null && (
                <div className='dish-list'>
                    {dishes.map((dish, index)=>(
                        <DishCard 
                            key={index} 
                            link={`/dish/${dish.idMeal}`} 
                            img={dish.strMealThumb}
                            name={dish.strMeal}
                            area={value}
                            displayCategory="none"
                            displayArea="block"
                        />
                    ))}
                </div>
            )}
        </Container>
    )
}

export default Area;