import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const List = styled.ul`
    display: grid;
    max-width: calc(100vw - 40px);
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 10px;
    margin: 0 auto;    
    padding: 10px 0;
    list-style: none;
    border-bottom: 1px solid tomato;
    background-color: #fffbf5;
    `

export const Item = styled.li`    
    width: 200px;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
                0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

        :hover, :focus {            
            transform: scale(1.05);
        }
    `

export const Title = styled.h1`
    margin: auto 0;
    padding: 10px 10px 10px 10px;
    text-align: center;
    font-size: 20px;    
    `

export const Link = styled(NavLink)`
    display: flex;
    flex-direction: column;    
    justify-content: space-between;
    height: 100%;
    text-decoration: none;
    cursor: inherit;
    color: inherit;
    outline: none;    
    `

export const Poster = styled.img`
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
    `