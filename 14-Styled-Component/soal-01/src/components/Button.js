import { StyledButton } from "./styles/Button";

function Button(props){
    return(
        <StyledButton fullWidth={props.fullWidth}>Buys</StyledButton>
    )
}
export default Button;