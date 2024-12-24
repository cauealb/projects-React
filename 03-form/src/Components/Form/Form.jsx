import { useState } from "react";
import { List } from "../List/ListLogin";
import { StyledForm, StyledLabel, StyledInput, StyledButton } from "./Form.s";

export function Form() {

    const [changeUsername, setChageUsername] = useState('')
    const [changePassword, setChagePassword] = useState('')

    const [listLogin, setListLogin] = useState([])

    function HandleChangeUsername() {
        setChageUsername(event.target.value)
    }

    function HandleChangePassword() {
        setChagePassword(event.target.value)
    }

    function HandleSubmitLogin() {
        event.preventDefault()

        if (changeUsername.trim().length < 5 || changePassword.trim().length < 5) {
            alert('O Usuário ou Senha precisa ter no mínimo 5 caractáres')

        } else {
            setListLogin([...listLogin, {user: changeUsername, pass: changePassword}])
        }
        setChagePassword('')
        setChageUsername('')
    }

    function handleEditLogin(user, pass) {
        const newList = listLogin.filter(item => item.pass != pass)
        setListLogin(newList)

        setChageUsername(user)
        setChagePassword(pass)
    }

    return (
        <>
            <StyledForm onSubmit={HandleSubmitLogin}>
                <StyledLabel htmlFor="user">User</StyledLabel>
                <StyledInput onChange={HandleChangeUsername} value={changeUsername} type="text" id="user" placeholder="exemple123" autoFocus autoComplete="off" required min={5}/>

                <StyledLabel htmlFor="password">Password</StyledLabel>
                <StyledInput onChange={HandleChangePassword} value={changePassword} type="text" id="password" placeholder="password12345" autoComplete="off"  required min={5}/>

                <StyledButton type="submit">Send</StyledButton>
            </StyledForm>
            {listLogin.map(item => {
                return <List key={item.pass} infos={item} editFunction={handleEditLogin}/>
            })}

        </>
    )
}