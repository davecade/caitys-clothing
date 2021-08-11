import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 600px) {
        border: 1px solid red;
        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (max-width: 400px) {
        border: 1px solid red;
        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`


export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    //padding: 25px;

    @media screen and (max-width: 650px) {
       width: 40px;
    }
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const OptionContainerStyles = css`
    padding: 10px 15px;
`

export const OptionHover = css`
    font-weight: bold;
    cursor: pointer;
`

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}: hover {
        ${OptionHover}
    }

`

export const OptionDiv = styled.div`
    ${OptionContainerStyles}: hover {
        ${OptionHover}
    }
`