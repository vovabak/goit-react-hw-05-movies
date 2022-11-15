import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    padding: 0 20px;    
    `

export const Header = styled.header`
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    font-size: 18px;
    border-bottom: 1px solid tomato;
    background-color: white;
    `

export const Nav = styled.nav`
    display: flex;
    align-item: center;
    `
export const Logo = styled.span`
    display: block;
    margin: auto 0;
    width: 30px;
    color: tomato;
    `

export const Link = styled(NavLink)`
    display: block;
    text-decoration: none;
    padding: 10px;    
    color: black;
    outline: none;

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