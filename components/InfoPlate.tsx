import Image from 'next/image'
import React from 'react'

interface InfoPlateProps {
    children: JSX.Element
    icon: string
    title: string
    text: string
    direction?: 'left' | 'right'
}

function InfoPlate({ children, icon, title, text, direction = 'left' }: InfoPlateProps) {
    return (
        <>
            <div
                className={direction == 'left' ? "infoplate" : "infoplate infoplate__right"}
            >
                <div className="infoplate__textblock">
                    <Image
                        src={icon}
                        className="infoplate__icon"
                        alt={title + '-icon'}
                    />
                    <h1 className="infoplate__title">{title}</h1>
                    <p className="infoplate__text">{text}</p>
                </div>
                <div className="infoplate__imgblock">
                    {children}
                </div>
            </div>
            <div className="infoplate__mobile-imgblcok">
                {children}
            </div>
        </>
    )
}

export default InfoPlate