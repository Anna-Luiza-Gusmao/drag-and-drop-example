import styled from "styled-components"

export const CardContainer = styled.div<{ $isDragging: boolean }>`
    cursor: move;

    padding: 1.5rem;
    border-radius: 8px;
    background-color: ${props => props.theme.colors["blue-600"]};
    opacity: ${props => props.$isDragging ? 0 : 1};
`