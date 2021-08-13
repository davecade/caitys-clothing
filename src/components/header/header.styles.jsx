import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px) {
        width: 100%;
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 600px) {
        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 0px;
    }

    @media screen and (max-width: 400px) {

        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 0;
    }
`


export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    //padding: 25px;

    @media screen and (max-width: 600px) {
       width: 40px;
    }
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 600px) {
        padding: 10px 15px;
        width: 80%;
    }

    @media screen and (max-width: 400px) {
        padding: 0 15px;
        width: 100%;
    }

`

export const OptionContainerStyles = css`
    padding: 10px 15px;

    @media (max-width: 600px) {
        width: 100%;
    }
`

export const OptionHover = css`
    font-weight: bold;
    cursor: pointer;
`

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}: hover {
        ${OptionHover}
    }

    @media screen and (max-width: 400px) {
        width: 100%;
        padding: 10px 15px;
    }

`

export const OptionDiv = styled.div`
    ${OptionContainerStyles}: hover {
        ${OptionHover}
    }
`