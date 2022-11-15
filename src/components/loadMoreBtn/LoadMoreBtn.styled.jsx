import styled from "styled-components"

export const Button = styled.button`    
    margin: 10px 0;
    padding: 10px;
    border-radius: 4px;
    background-color: tomato;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    display: inline-block;
    color: #fff;
    border: 0;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 16px;    
    width: 100px;
    
        :hover, :focus {
            opacity: 0.8;
            box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
                0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
        }
    `