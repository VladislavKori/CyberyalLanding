import React from 'react'

interface BoardProps {
    title: string
    text: string
    overtitle?: string
}

function Board({ title, text, overtitle }: BoardProps) {
    return (
        <div className="board">
            {overtitle ? (
                <div className="board__over-title">
                    <p>{overtitle}</p>
                </div>
            ) : null}
            <h1 className="board__title">{title}</h1>
            <p className="board__text">{text}</p>
        </div>
    )
}

export default Board