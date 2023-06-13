import React from 'react'
import Image from 'next/image'

interface SocialLinkProps {
    link: string
    text: string
    icon: any
}

function SocialLink({ link, text, icon }: SocialLinkProps) {
    return (
        <a href={link} className="socialLink">
            {icon()}
            <p>{text}</p>
        </a>
    )
}

export default SocialLink