import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const List = styled.ul`
    display: grid;
    max-width: calc(100vw - 40px);
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 10px;
    margin: 0 auto;    
    padding: 0;
    list-style: none;    
    `

export const Item = styled.li`
    
    width: 200px;
    margin-left: auto;
    margin-right: auto;    
    `

export const Title = styled.h1`
    margin: auto 0;
    padding: 5px 10px;
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
    `

export const Poster = styled.img`
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
    `
    