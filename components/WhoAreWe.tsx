import React from 'react'
import Board from './Board'
import InfoPlate from './InfoPlate'
import Image from 'next/image'

import CupIcon from '@/public/assets/CupIcon.svg'
import RoomImg from '@/public/assets/room.png'
import AccountIcon from '@/public/assets/account.svg'
import UserPageImg from '@/public/assets/userpage.png'

function WhoAreWe() {
  return (
    <div className="whoarewe">
        <Board 
            overtitle="Why are we"
            title="Our features and benefits"
            text="We strive to improve our platform, listen to the opinions of users and do our best to make you feel comfortable, safe and pleasant to use our product."
        />

        <InfoPlate
            icon={CupIcon}
            title="More about tournaments"
            text={`The "Tournament" feature allows users of our site to create their own tournaments of any size and format. With this feature you can create 1v1, 5v5 or even 1v100 tournaments by choosing from our wide list of supported games.
            With this feature, you can participate in tournaments that other players participate in and win prize money. All tournaments are held using a secure payment system, which ensures the safety of your financial transactions.
            In addition, you can customize various tournament settings, such as game rules, prize pool, tournament duration, and more. You can choose any game mode you want to use in your tournament.
            Thus, the "Create a Tournament" feature is the perfect tool for those who want to enjoy competitive play at a high level and earn some money in the process.`}
        >
            <div className="whoarewe__img-container">
                <Image
                    src={RoomImg}
                    alt={'room'}
                    className="whoarewe__img_blue"
                />
            </div>
        </InfoPlate>

        <InfoPlate
            icon={AccountIcon}
            direction='right'
            title="Personal account"
            text={`The user's personal account is a personal account on the platform, which is designed to manage their personal data and activities on the site. 
            Usually on the profile page, the account owner can change information about himself, such as nickname, banner, avatar and other data. Also, the account owner can add links to their social networks such as Facebook, Discord, Twitch, etc. to share their activities with friends and followers.
            In addition, the account owner can list their favorite game and showcase their stream on the Twitch platform to show off their gaming skills and share their experience with their viewers. Also on the profile page, the user's rating on the site can be indicated, which displays the level of activity and interaction with other participants.`}
        >
            <div className="whoarewe__img-container">
                <Image
                    src={UserPageImg}
                    alt={'account'}
                    className="whoarewe__img_pink"
                />
            </div>
        </InfoPlate>

    </div>
  )
}

export default WhoAreWe