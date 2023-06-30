import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { socials } from "@/data/socials";
import { motion } from 'framer-motion';
import { smoothShow } from "@/data/animations";
import { supabase } from "@/api/supabaseClient";

function Socials() {

  const [loading, setLoading] = useState<boolean>(false)
  const [socials, setSocials] = useState<Array<{ title: string, subtitle: string, icon: string, link: string  }>>([])
  const getTexts = useCallback(async () => {
    try {
      const { data, status, error } = await supabase.from('links').select('*');
      if (data && error == null) {
        setSocials(data)
      }
    } catch (err) {
      console.log(err)
    }
  }, [])

  useEffect(() => {
    getTexts()
  }, [])


  return (
    <div className="socials">
      <h1 className="socials__title">Our social networks</h1>
      <ul className="socials__list">
        {socials.map((item, index) => {
          return (
            <motion.li
              {...smoothShow(0.5, index / 5)}
              className="socials__item socials__item_discord"
            >
              <Link
                href={item.link}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div className="socials__card" style={{ padding: "16px" }}>
                  <Image src={item.icon} width={48} height={48} alt="icon" />
                  <div className="socials__card-info">
                    <h2 className="socials__card-title">{item.title}</h2>
                    <p className="socials__card-text">{item.subtitle}</p>
                  </div>
                </div>
              </Link>
            </motion.li>
          )
        })}
      </ul>
    </div>
  );
}

export default Socials;
