import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'

import ArrowRight from "../../public/assets/ArrowRight.svg";
import Button from '@/components/UI/Button';

const animation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: {
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.5,
    }
}

function Join() {
    return (
      <motion.div {...animation} className="affiliate-join">
        <div className="problems_container">
          <div className="problems_container_image"></div>
          <div className="affiliate-join__content">
            <p className="affiliate-join__text">
              Join Cyberyal affiliate program, promote our gaming platform with
              provided resources, and earn commissions from successful
              referrals. Boost your income while sharing your gaming passion!
            </p>

            <div className="affiliate-join__btn">
              <Button />
            </div>
          </div>
        </div>
      </motion.div>
    );
}

export default Join