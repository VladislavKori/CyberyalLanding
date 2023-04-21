import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

import RoadMapPc from '@/public/roadmap/roadmap-pc.png';
import RoadMapMobile from '@/public/roadmap/roadmap-mob.png';

import { points } from '@/data/roadmap';

const animation = (delay: number = 0) => {
    const result = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: {
            ease: "easeInOut",
            duration: 0.6,
            delay: 0.2 + delay,
        }
    }
    return result;
}

function RoadMap() {
    return (
        <div className="roadmap">
            <header className="roadmap__header">
                <motion.h2 {...animation()} className="roadmap__title">Roadmap</motion.h2>
                <motion.h2 {...animation()} className="roadmap__time">2021 - 2024</motion.h2>
            </header>
            <motion.div {...animation()} className="roadmap__img">
                <Image src={RoadMapPc} alt="roadmap" />
                <Image src={RoadMapMobile} alt="roadmap" />
            </motion.div>
            <div className="roadmap__text-info">
                {points.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="roadmap__text-container">
                            <h3 className="roadmap__id">{item.id}</h3>
                            <h3 className="roadmap__date">{item.title}</h3>
                            <ul className="roadmap__cases">
                                {item.cases.map((elm, index) => (
                                    <React.Fragment key={index}>
                                        <p className="roadmap__case">{elm}</p>
                                    </React.Fragment>
                                ))}
                            </ul>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default RoadMap