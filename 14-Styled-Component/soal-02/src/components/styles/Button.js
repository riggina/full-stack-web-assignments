import styled from "styled-components";

const StyledButton = styled.button`
    cursor: pointer;
    padding: 1.5em 0.5em;
    font-family: sans-serif;
    font-size: 1.25em;
    border: 1px solid ${props => (props.outline === "TRUE" ? 'lightblue' : 'white')};
    background-color: ${(props) => props.outline ? 'white' : 'lightblue'};
    color : ${(props) => props.outline ? 'lightblue' : 'white'};
    width: ${(props) => props.fullWidth ? '100%' : 'auto'};
    &:hover{
        border: 1px solid ${(props) => props.outline ? 'lightblue' : 'white'};
        background-color: ${(props) => props.outline ? 'lightblue' : 'cornflowerblue'};
    }
`;

export {StyledButton};