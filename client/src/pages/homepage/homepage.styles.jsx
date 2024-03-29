import styled from 'styled-components'

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;

    @media screen and (max-width: 650px) {
        padding: 0 10px;
        display: grid;
        grid-column 1fr 1fr;
    }
`