import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    padding: 5px 20px;    
    `

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    border-bottom: 1px solid tomato
    `

export const Nav = styled.nav`
    display: flex;
    align-item: center;
    `

export const Link = styled(NavLink)`
    display: block;
    text-decoration: none;
    padding: 10px;    
    color: black;

        :hover, :focus {
            color: gray;
        } 

        &.active {
            background-color: tomato;
            border-radius: 4px;
            color: white;
        }

        :not(:last-child) {
            margin-right: 10px;
        }    
    `