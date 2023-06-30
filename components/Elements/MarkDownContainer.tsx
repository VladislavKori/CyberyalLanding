import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

interface MarkdownContainerProps {
    text: string
}

export default function MarkdownContainer({text}: MarkdownContainerProps) {
    return (
        <div className="markdown-container">
            <ReactMarkdown 
                children={text}
                className='markdown-container__plugin'
            />
        </div>
    )
}