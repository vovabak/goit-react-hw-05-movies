import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`    
    background-color: #fffbf5
    `

export const Poster = styled.img`
    display: block;
    padding-left: 20px;
    padding-bottom: 20px;
    `

export const Info = styled.div`
    padding-left: 20px;
    padding-bottom: 20px;
    width: 60%;
    `

export const Thumb = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    `

export const Title = styled.h1`
    margin: 0;
    `

export const Text = styled.p`
    margin: 0;
    margin-top: 10px
    `

export const Link = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid tomato;
    padding: 10px 10px 5px 10px;    
    color: black;

        :hover, :focus {
            color: gray;
        }
    `