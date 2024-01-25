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

    function ensureNonEmptyArrays(hoverColumnIndex: string, cardsList: any) {
      const columnKeys = Object.keys(cardsList)
      const columnIndex =
        hoverColumnIndex === 'toDo' ? 0
          : hoverColumnIndex === 'inProgress' ? 1
            : 2

      columnKeys.forEach((key) => {
        if (!cardsList[key].length) {
          cardsList[key].push({
            id: 1,
            text: "Arraste um item para essa coluna",
            columnIndex: columnIndex,
          })
        }

        if (cardsList[key].length === 2) cardsList[key] = cardsList[key].filter((card: Item) => card.text !== "Arraste um item para essa coluna")
      })

      return cardsList
    }

    const moveCard = useCallback((dragIndex: number, hoverIndex: number, dragColumnIndex: number, hoverColumnIndex: number) => {
      setCards((prevCards) => {
        const updatedCards = { ...prevCards }

        const dragColumnKey =
          dragColumnIndex === 0
            ? 'toDo'
            : dragColumnIndex === 1
              ? 'inProgress'
              : 'done'

        const hoverColumnKey =
          hoverColumnIndex === 0
            ? 'toDo'
            : hoverColumnIndex === 1
              ? 'inProgress'
              : 'done'

        const cardsInHoverColumn = [...updatedCards[hoverColumnKey]]

        if (dragColumnKey !== hoverColumnKey) {
          const cardsInDragColumn = [...updatedCards[dragColumnKey]]

          const [draggedCard] = cardsInDragColumn.splice(dragIndex, 1)
          draggedCard.columnIndex = hoverColumnIndex

          cardsInHoverColumn.splice(hoverIndex, 0, draggedCard)
          cardsInHoverColumn.forEach((card, index) => {
            card.id = index + 1
          })

          cardsInDragColumn.forEach((card, index) => {
            card.id = index + 1
          })

          updatedCards[dragColumnKey] = cardsInDragColumn
          updatedCards[hoverColumnKey] = cardsInHoverColumn

          ensureNonEmptyArrays(hoverColumnKey, updatedCards)

          return ensureNonEmptyArrays(hoverColumnKey, updatedCards)

        } else {
          const [draggedCard] = cardsInHoverColumn.splice(dragIndex, 1)
          cardsInHoverColumn.splice(hoverIndex, 0, draggedCard)

          draggedCard.columnIndex = hoverColumnIndex
          updatedCards[hoverColumnKey] = cardsInHoverColumn

          return updatedCards
        }
      })
    }, [])

    const renderCard = useCallback(
      (card: { id: number; text: string; columnIndex: number }, index: number) => {
        if (card.text === "Arraste um item para essa coluna") {
          return (
            <Card
              key={card.id}
              index={index}
              id={card.id}
              text={card.text}
              columnIndex={card.columnIndex}
              moveCard={moveCard}
              invisible={true}
            />
          )
        } else {
          return (
            <Card
              key={card.id}
              index={index}
              id={card.id}
              text={card.text}
              columnIndex={card.columnIndex}
              moveCard={moveCard}
              invisible={false}
            />
          )
        }
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