import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

// data
import { advantages } from '@/data/advantages';

// animations
import { smoothFromBottom } from '@/data/animations';
import { supabase } from '@/api/supabaseClient';

function Features() {

  const [texts, setTexts] = useState<Array<{title: string, text: string}> | Array<null>>([])
  const getTexts = useCallback( async () => {
    try {
      const {data, status, error} = await supabase.from('features').select('*');
      if (data && error == null) {
        setTexts(data)
      }
    } catch (err) {
      console.log(err)
    }
  }, [])

  useEffect(() => {
    getTexts()
  }, [])

  return (
    <div className="features">
      <div className="features__list">
        {advantages.map((item, index) => (
          <motion.div
            {...smoothFromBottom(1, index / 5)}
            className="features__item"
            key={item.id}
          >
            <div className="features__icon-wrapper">{item.icon()}</div>
            <h2 className="features__item-title">{texts[index]?.title}</h2>
            <p className="features__item-text">{texts[index]?.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Features