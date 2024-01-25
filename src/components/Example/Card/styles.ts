import styled from "styled-components"

export const CardContainer = styled.div<{ $isDragging: boolean, $invisible: boolean }>`
    cursor: ${props => props.$invisible ? "default" : "move"};

    padding: 1.5rem;
    border-radius: 8px;
    background-color: ${props => props.theme.colors["blue-600"]};
    opacity: ${props => props.$isDragging ? 0 : 1};
    opacity: ${props => props.$invisible ? 0.7 : 1};
`