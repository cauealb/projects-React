import { useState } from "react"
import { HeaderStyled } from "./Header.s"

export function Header({score}) {

    return (
        <>
            <HeaderStyled>
                <h1>Score</h1>
                <h1>{score}</h1>
            </HeaderStyled>
        </>
    )
}