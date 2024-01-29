import styled from "styled-components"

export const DragAndDropContainer = styled.section`
    display: flex;
    justify-content: center;
    flex: 1;
    gap: 2rem;
    max-height: 80%;
    padding: 1rem;

    width: 100%;
    overflow-x: auto;

    scrollbar-width: auto;
    scrollbar-color: ${props => props.theme.colors["blue-600"]} ${props => props.theme.colors["green-100"]};
  
    &::-webkit-scrollbar {
        height: 0.5rem;
    }
  
    &::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors["green-100"]};
        border-radius: 8px;
    }
  
    &::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors["blue-600"]};
        border-radius: 8px;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
        justify-content: space-between;
    }
    @media (min-width: 2560px) {
        gap: 3.5rem;
    }
`

export const ColumnBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 25rem;

    h3 {
        font-weight: 500;
        font-size: 1.25rem;
        background-color: ${props => props.theme.colors["green-500"]};
        padding: 1rem 1.5rem;
        border-radius: 16px;

        -webkit-box-shadow: 3px 9px 42px -6px ${props => props.theme.colors["black-700"]};
        -moz-box-shadow: 3px 9px 42px -6px ${props => props.theme.colors["black-700"]};
        box-shadow: 3px 9px 42px -6px ${props => props.theme.colors["black-700"]};
    }

    @media (min-width: 320px) and (max-width: 480px) {
        min-width: 20rem;
        font-size: 0.875rem;

        h3 {
            font-size: 1rem;
        }
    }
    @media (min-width: 481px) and (max-width: 1024px) {
        min-width: 24rem;
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
        min-width: 22rem;
    }
    @media (min-width: 2560px) {
        min-width: 36rem;
        font-size: 1.5rem;

        h3 {
            font-size: 1.75rem;
        }
    }
`

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 1rem;

    padding: 1.5rem;
    border-radius: 16px;
    background-color: ${props => props.theme.colors["green-500"]};
    
    -webkit-box-shadow: 3px 9px 42px -6px ${props => props.theme.colors["black-700"]};
    -moz-box-shadow: 3px 9px 42px -6px ${props => props.theme.colors["black-700"]};
    box-shadow: 3px 9px 42px -6px ${props => props.theme.colors["black-700"]};

    overflow-y: auto;

    scrollbar-width: auto;
    scrollbar-color: ${props => props.theme.colors["blue-600"]} ${props => props.theme.colors["green-100"]};
  
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
  
    &::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors["green-100"]};
        border-radius: 8px;
    }
  
    &::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors["blue-600"]};
        border-radius: 8px;
    }
`