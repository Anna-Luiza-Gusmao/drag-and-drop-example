import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme.colors["green-700"]};
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        overflow-y: auto;

        scrollbar-width: auto;
        scrollbar-color: ${props => props.theme.colors["gray-300"]} ${props => props.theme.colors["gray-100"]};
      
        &::-webkit-scrollbar {
            width: 0.75rem;
        }
      
        &::-webkit-scrollbar-track {
            background-color: ${props => props.theme.colors["gray-100"]};
            border-radius: 8px;
        }
      
        &::-webkit-scrollbar-thumb {
            background: ${props => props.theme.colors["gray-300"]};
            border-radius: 8px;
        }
    }
    
    body, input, textarea, button, a, select, option {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;   
        font-size: 1rem;
        color: ${props => props.theme.colors.white};
    }

    :focus {
        outline: 4px auto -webkit-focus-ring-color;
    }
`