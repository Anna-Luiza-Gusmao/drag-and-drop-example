import type { Identifier, XYCoord } from 'dnd-core'
import type { FC } from 'react'
import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { CardContainer } from './styles'

const ItemTypes = {
    CARD: 'card',
}

export interface CardProps {
    id: number
    text: string
    index: number
    columnIndex: number
    invisible: boolean
    moveCard: (dragIndex: number, hoverIndex: number, dragColumnIndex: number, columnIndex: number) => void
}

interface DragItem {
    index: number
    id: string
    type: string,
    columnIndex: number
}

export const Card: FC<CardProps> = ({ id, text, index, moveCard, columnIndex, invisible }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [{ handlerId }, drop] = useDrop<
        DragItem,
        void,
        { handlerId: Identifier | null }
    >({
        accept: ItemTypes.CARD,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item: DragItem, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index

            const dragColumnIndex = item.columnIndex
            const hoverColumnIndex = columnIndex

            // Don't replace items with themselves
            if (dragIndex === hoverIndex && dragColumnIndex === hoverColumnIndex) {
                return
            }

            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect()

            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

            // Determine mouse position
            const clientOffset = monitor.getClientOffset()

            // Get pixels to the top
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%

            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }

            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            moveCard(dragIndex, hoverIndex, dragColumnIndex, hoverColumnIndex)
            item.index = hoverIndex
            item.columnIndex = hoverColumnIndex
        },
    })

    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.CARD,
        item: () => {
            return { id, index, columnIndex }
        },
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    drag(drop(ref))

    return (
        <CardContainer ref={ref} data-handler-id={handlerId} $isDragging={isDragging} $invisible={invisible}>
            {text}
        </CardContainer>
    )
}
