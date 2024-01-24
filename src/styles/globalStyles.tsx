import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        height: 100vh;

        background-color: ${props => props.theme.colors["green-700"]};
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
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