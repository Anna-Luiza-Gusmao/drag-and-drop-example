import styled from "styled-components"

export const DragAndDropContainer = styled.section`
    display: flex;
    flex: 1;
    gap: 2rem;
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
`