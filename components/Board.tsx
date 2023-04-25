import React from 'react'
import { motion } from 'framer-motion'

interface BoardProps {
    title: string
    text: string
    overtitle?: string
}

function Board({ title, text, overtitle }: BoardProps) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 0.4,
          delay: 0.2,
        }}
        className="board"
      >
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