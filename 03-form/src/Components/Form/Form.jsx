import { useState } from "react";
import { StyledForm, StyledLabel, StyledInput, StyledButton } from "./Form.s";

export function Form({submit}) {
    const [changeUser, setChangeUser] = useState('')
    const [changePass, setChangePass] = useState('')

    function handleChangeUser() {
        setChangeUser(event.target.value)
    }

    function handleChangePass() {
        setChangePass(event.target.value)
    }

    function handleSubmit() {
        submit(changeUser, changePass)
    }

    return (
        <>
            <StyledForm onSubmit={handleSubmit}>
                <StyledLabel htmlFor="user">User</StyledLabel>
                <StyledInput onChange={handleChangeUser} type="text" id="user" placeholder="exemple123" autoFocus autoComplete="off" required min={5}/>

                <StyledLabel htmlFor="password">Password</StyledLabel>
                <StyledInput onChange={handleChangePass} type="text" id="password" placeholder="password12345" autoComplete="off"  required min={5}/>

                <StyledButton type="submit">Send</StyledButton>
            </StyledForm>
        </>
    )
}