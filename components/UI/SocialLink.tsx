import React from 'react'
import Image from 'next/image'

interface SocialLinkProps {
  link?: string;
  text: string;
  icon: any;
}

function SocialLink({ link, text, icon }: SocialLinkProps) {
  return (
    <div className="socialLink">
      {icon()}
      <p>{text}</p>
    </div>
  );
}

export default SocialLink