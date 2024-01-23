import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyle } from "./styles/globalStyles"
import { Container } from "./styles"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { Example } from "./components/Example"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <h1>Teste da Funcionalidade Drag and Drop do React</h1>
        <DndProvider backend={HTML5Backend}>
					<Example />
				</DndProvider>
      </Container>

      <GlobalStyle />
    </ThemeProvider>
  )
}