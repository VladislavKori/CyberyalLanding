import React from 'react'
import { motion } from 'framer-motion'

// animations
import { smoothFromBottom } from '@/data/animations'

interface BoardProps {
    title: string
    text: string
    overtitle?: string
}

function Board({ title, text, overtitle }: BoardProps) {
    return (
        <motion.div {...smoothFromBottom(0.4, 0.2)} className="board">
            {overtitle ? (
                <div className="board__over-title">
                    <p>{overtitle}</p>
                </div>
            ) : null}
            <h1 className="board__title">{title}</h1>
            <p className="board__text" style={{ opacity: "0.8" }}>
                {text}
            </p>
        </motion.div>
    );
}

export default Board