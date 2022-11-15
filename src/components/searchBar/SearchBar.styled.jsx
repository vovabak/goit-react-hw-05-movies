import styled from "styled-components";


export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 20px 0 0 0;
    width: 100%;
    max-width: 600px;    
    border-radius: 3px;
    overflow: hidden;
    `

export const Button = styled.button`
    display: inline-block;
    margin-left: -40px;
    width: 40px;
    height: 40px;
    border: 0;
    color: tomato;
    background-color: inherit;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
        :hover {
            color: red;            
        }
    `

export const ButtonLabel = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
    `


export const Input = styled.input`
    display: inline-block;
    width: 100%;
    height: 25px;
    font: inherit;
    font-size: 14px;    
    border: 1px solid tomato;
    border-radius: 4px;
    outline: none;
    padding-left: 4px;
    padding - right: 4px;
    background-color: inherit;
        ::placeholder {
            opacity: 0.4;
            font: inherit;
        }
    `

export const Label = styled.label`
    width: 50%;
    `