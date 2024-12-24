import { StyledForm, StyledLabel, StyledInput, StyledButton } from "./Form.s";

export function Form({changeUser, changePassword}) {
    return (
        <>
            <StyledForm>
                <StyledLabel htmlFor="user">User</StyledLabel>
                <StyledInput onChange={changeUser} type="text" id="user" placeholder="exemple123" autoFocus autoComplete="off" required min={5}/>

                <StyledLabel htmlFor="password">Password</StyledLabel>
                <StyledInput onChange={changePassword} type="text" id="password" placeholder="password12345" autoComplete="off"  required min={5}/>

                <StyledButton type="submit">Send</StyledButton>
            </StyledForm>
        </>
    )
}