import { StyledForm, StyledLabel, StyledInput } from "./Form.s";

export function Form() {
    return (
        <>
            <StyledForm>
                <StyledLabel htmlFor="user">User</StyledLabel>
                <StyledInput type="text" id="user" placeholder="exemple123" required min={5}/>

                <StyledLabel htmlFor="password">Password</StyledLabel>
                <StyledInput type="text" id="password" placeholder="password12345" required min={5}/>

                <button type="submit">Enviar</button>
            </StyledForm>
        </>
    )
}