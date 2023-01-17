import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  height: 3rem;
  z-index: 5;
  input {
    width: 30%;
    height: 100%;
    outline: none;
    padding: 1rem;
    font-size: 1rem;
  }
  .dropdown {
    position: relative;
    height: 100%;
    width: 10rem;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    cursor: pointer;
    .dropdown-content {
      z-index: 5;
      top: 3rem;
      width: 100%;
      height: 12rem;
      overflow: auto;
      align-items: center;
      color: black;
      border-radius: 0.2rem;
      background-color: rgb(244, 244, 244);
      p {
        width: 100%;
        padding: 0.5rem 0;
        text-align: center;
        cursor: pointer;
        transition: 0.35s ease-in;
        &:hover {
          background-color: rgb(230, 230, 230);
        }
      }
    }
  }

  @media (max-width: 480px) {
    input {
      width: 100%;
    }
    .dropdown {
      width: 11rem;
    }
  }
`;

function Choose(props){
    const [label, setLabel] = useState("Choose Me");
    const [display, setDisplay] = useState(false);

    const handleClick = (e)=>{
      if(!display){
            setDisplay(true);
            setLabel('Close');
        } else {
            setDisplay(false);
            setLabel('Choose Me');
        }
    }

    const handleList = (e)=>{
      setDisplay(false);
      setLabel('Choose Me');
      props.handleClick(e.target.innerHTML);
  }

    return (
        <Container className="Choose flex-row">
            <input type='text' placeholder={`Select ${props.type}`} value={props.value} readOnly />
            <div className="dropdown flex-row">
                <span onClick={handleClick}>{label}</span>
                {display && (
                    <div className="dropdown-content absolute flex-column">
                        {props.property.map((area, key)=>(
                          <p key={key} onClick={handleList}>{area.strArea || area.strCategory}</p>
                        ))}  
                    </div>
                )}
            </div>
        </Container>
    )
}

export default Choose;