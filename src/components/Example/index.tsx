import update from 'immutability-helper'
import { useCallback, useState } from 'react'
import { Card } from './Card'
import { DragAndDropContainer } from './styles'
import CardsList from "./cardsList.json"

export interface Item {
  id: number
  text: string
}

export interface ContainerState {
  cards: Item[]
}

export function Example() {
  {
    const [cards, setCards] = useState(CardsList.cardsList)

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
      setCards((prevCards: Item[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as Item],
          ],
        }),
      )
    }, [])

    const renderCard = useCallback(
      (card: { id: number; text: string }, index: number) => {
        return (
          <Card
            key={card.id}
            index={index}
            id={card.id}
            text={card.text}
            moveCard={moveCard}
          />
        )
      },
      [],
    )

    return (
      <DragAndDropContainer>
        {cards.map((card, i) => renderCard(card, i))}
      </DragAndDropContainer>
    )
  }
}