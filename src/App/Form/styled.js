import styled, { css } from "styled-components";

export const FormLabel = styled.label`
    width: 100%;
    max-width: 150px;
    display: inline-block;
    margin-right: 5px;
    padding: 10px 0;
    font-weight: bold;  
`;

export const FormField = styled.input`
    padding-top: 10px;
    padding-bottom: 10px;
    max-width: 400px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;

    ${({ required }) =>
        required &&
        css`
            border-color: black;
        `}
`;

export const FormButton = styled.button`
    text-align: center;
    border-color: crimson;
    width: 150px;
    border: none;
    background-color: crimson;
    color: white;
    padding: 10px 0;
    border-radius: 5px;

    &:hover {
        background-color: hsl(348, 83%, 67%);
    }

    &:active {
        background-color: hsl(348, 83%, 27%);
    }
`;

export const FormFieldset = styled.fieldset`
    padding: 20px;
    border-radius: 5px;
    margin: 20px 0;
    text-align: center;
    background-color: white;
`;

export const FormResult = styled.div`
    margin: auto;
    text-align: center;
`;

export const FormLegend = styled.div`
    margin: auto;
    text-align: center;
    background-color: crimson;
    color: white;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
`;

