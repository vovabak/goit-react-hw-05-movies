
import styled from "styled-components";


export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: white;
    `

export const Item = styled.li`
    padding: 20px 0;

    h3 {
        margin: 0;
        padding: 0px 10px;        
    }

    p {
        margin: 0;
        padding: 20px 20px;        
    }

    a {
        display: inline-block;
        text-decoration: none;
        padding: 5px 10px 10px 10px; 

        // :hover, :focus {
        //     color: gray;
        // }
    }

    :nth-child(2n) {
        background-color: #fffbf5;
        }    
    `