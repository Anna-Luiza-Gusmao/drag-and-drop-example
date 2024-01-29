import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

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

    @media (min-width: 320px) and (max-width: 480px) {
        gap: 1.5rem;
        padding: 2rem;

        header {
            width: 90%;
        }

        h1 {
            padding-bottom: 0.75rem;
        }
    
        h2 {
            font-size: 1.25rem;
        }
    }
    @media (min-width: 481px) and (max-width: 768px) {
        gap: 1.5rem;
        padding: 3rem;

        header {
            width: 70%;
        }

        h1 {
            padding-bottom: 0.75rem;
        }
    
        h2 {
            font-size: 1.25rem;
        }
    }
    @media (min-width: 769px) and (max-width: 1280px) {
        gap: 2rem;
        padding: 3rem;
    
        header {
            width: 80%;
        }
    
        h1 {
            padding-bottom: 0.75rem;
        }
    }
    @media (min-width: 2560px) {
        padding: 6rem;
    
        header {
            width: 70%;
        }
    
        h1 {
            font-size: 3rem;
        }
    
        h2 {
            font-size: 2.25rem;
        }
    }
`