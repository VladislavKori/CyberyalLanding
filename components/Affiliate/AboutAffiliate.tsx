import React from 'react'
import Image from 'next/image'

import InfoPlate from '../InfoPlate'
import HomePageImg from '@/public/affiliate/homepage.png'

function AboutAffiliate() {
    return (
        <div className="aboutAffiliate">
            <div className="affiliate-container">
                <InfoPlate
                    title="Cyberyal Affliate Program"
                    text={`Embrace the opportunity to earn with Cyberyal Gaming Platform's affiliate program, designed to empower you with valuable resources and tools to effectively promote the platform. As you drive traffic to Cyberyal, you'll reap the benefits of impressive conversion rates and substantial payouts. With our comprehensive support, including eye-catching banners, compelling promotional materials, and your unique referral link, you'll be well-equipped to engage your audience and monetize your influence. So, join the Cyberyal success story and turn your passion for gaming into a lucrative venture, all while expanding the platform's thriving community.`}
                    direction='right'
                    buttonOn={true}
                >
                    <div className="whoarewe__img-container">
                        <Image
                            src={HomePageImg}
                            alt={"room"}
                            className=""
                        />
                    </div>
                </InfoPlate>
            </div>
        </div>
    )
}

export default AboutAffiliate