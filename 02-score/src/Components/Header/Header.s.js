import styled from 'styled-components'

export const HeaderStyled =  styled.header`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    box-shadow: 0 3px 10px ${props => props.theme['--gray-100']};

    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    font-family: monospace;
    line-height: 1.2;
`;