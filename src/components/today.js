import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  gap: 7rem;
  .clock {
    font-size: 5.5rem;
    width: 100%;
  }
  div {
    position: relative;
    width: 25%;
    button {
      top: 0;
      right: 0;
      border: none;
      background: none;
      svg {
        width: 1.5rem;
        height: 1.5rem;
        color: gray;
        transition: 0.3s ease-in;
        &:hover {
          color: black;
        }
      }
    }
  }
  h1 {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 60%;
    color: black;
    span {
      color: var(--yellow);
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 2rem;
    div {
      order: 1;
      width: 100%;
    }
    h1 {
      width: 100%;
    }
  }
`;

function Today(){
    const [time, setTime] = useState(new Date().toLocaleString('en-us', {hour:"2-digit", minute:"2-digit", hour12:false}));

    const cur_date = new Date();
    const date = `${cur_date.toLocaleDateString('en-us', {month: 'long'})} ${cur_date.getDate()}, ${cur_date.getFullYear()}`;
    const week = cur_date.toLocaleDateString('en-us',{weekday: 'long'});
    const hour = cur_date.getHours();
    let mealTime = '', hello = 'What do you want to eat?';

    if (hour >= 6 && hour < 9) {
        mealTime = "breakfast";
      }
    if (hour >= 9 && hour < 12) {
    mealTime = "brunch";
    }
    if (hour >= 12 && hour < 14) {
    mealTime = "lunch";
    }
    if (hour >= 14 && hour < 17) {
    mealTime = "tea";
    }
    if (hour >= 17 && hour < 22) {
    mealTime = "dinner";
    }
    if (hour >= 22 && hour < 24) {
    mealTime = "sleep";
    hello = "let's have a rest.";
    }
    if (hour >= 0 && hour < 6) {
    mealTime = "sleep";
    hello = "let's have a rest.";
    }

    setInterval(()=>{
        setTime(new Date().toLocaleString('en-us', {hour:"2-digit", minute:"2-digit", hour12:false}));
    }, 1000)

    return(
        <Container className="flex-row">
            <div>
                <p>{date}</p>
                <div className="clock">
                    {time}
                </div>
            </div>
            <h1>It's your <span>{mealTime} time</span> on {week}, {hello}</h1>
        </Container>
    )
}

export default Today;