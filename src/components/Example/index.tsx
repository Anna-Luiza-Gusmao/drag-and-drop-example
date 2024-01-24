import { useCallback, useState } from 'react'
import { Card } from './Card'
import { CardsContainer, ColumnBox, DragAndDropContainer } from './styles'
import CardsList from "./cardsList.json"

export interface Item {
  id: number
  text: string,
  columnIndex: number
}

export interface ContainerState {
  cards: Item[]
}

export function Example() {
  {
    const [cards, setCards] = useState(CardsList.cardsList)

    const moveCard = useCallback((dragIndex: number, hoverIndex: number, hoverColumnIndex: number) => {
      setCards((prevCards) => {
        const updatedCards = { ...prevCards }

        const columnKey = hoverColumnIndex === 0 ? 'toDo' : (hoverColumnIndex === 1 ? 'inProgress' : 'done')

        const cardsInColumn = [...updatedCards[columnKey]]

        const [draggedCard] = cardsInColumn.splice(dragIndex, 1)
        cardsInColumn.splice(hoverIndex, 0, draggedCard)

        draggedCard.columnIndex = hoverColumnIndex
        updatedCards[columnKey] = cardsInColumn

        return updatedCards
      })
    }, [])

    const renderCard = useCallback(
      (card: { id: number; text: string; columnIndex: number }, index: number) => {
        return (
          <Card
            key={card.id}
            index={index}
            id={card.id}
            text={card.text}
            columnIndex={card.columnIndex}
            moveCard={moveCard}
          />
        )
      },
      [moveCard],
    )

    return (
      <DragAndDropContainer>
        <ColumnBox>
          <h3>A fazer</h3>
          <CardsContainer>
            {cards.toDo.map((card, i) => renderCard(card, i))}
          </CardsContainer>
        </ColumnBox>
        <ColumnBox>
          <h3>Em andamento</h3>
          <CardsContainer>
            {cards.inProgress.map((card, i) => renderCard(card, i))}
          </CardsContainer>
        </ColumnBox>
        <ColumnBox>
          <h3>Concluído</h3>
          <CardsContainer>
            {cards.done.map((card, i) => renderCard(card, i))}
          </CardsContainer>
        </ColumnBox>
      </DragAndDropContainer>
    )
  }
}