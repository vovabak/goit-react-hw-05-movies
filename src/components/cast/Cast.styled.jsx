import styled from "styled-components";


export const List = styled.ul`
    margin: 0;
    padding: 20px 0;
    list-style: none;
    background-color: white;        
    `

export const Item = styled.li`
    p {
        margin: 5px 0;
        padding: 20px 20px;
        background-color: #fffbf5
    }

    img {
        display: block;
        padding-left: 20px;
    }
        
    :not(:last-child) {
        margin-bottom: 5px;
    }
    `