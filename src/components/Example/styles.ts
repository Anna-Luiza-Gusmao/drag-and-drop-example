import styled from "styled-components"

export const DragAndDropContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
    min-width: 28rem;

    padding: 1.5rem;
    border-radius: 16px;
    background-color: ${props => props.theme.colors["green-500"]};

    -webkit-box-shadow: 3px 9px 42px -6px ${props => props.theme.colors["black-700"]};
    -moz-box-shadow: 3px 9px 42px -6px ${props => props.theme.colors["black-700"]};
    box-shadow: 3px 9px 42px -6px ${props => props.theme.colors["black-700"]};
`