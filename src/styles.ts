import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;

    padding: 4rem;

    header {
        width: 60%;
        text-align: center;
    }

    h1 {
        font-weight: 500;
        padding-bottom: 1rem;
    }

    h2 {
        font-weight: 400;
    }
`