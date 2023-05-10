import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const requiredInfo = [
  {
    title: "Streamers and bloggers",
    text: "Get yourself a friendly platform where you can play, create content and participate in custom special projects and collaborations, developed personally for you on the best conditions.",
  },
  {
    title: "Game developers and publishers",
    text: "We can integrate some of our functionality into your game, so you don't have to develop matchmaking and economic systems yourself. You can connect with other games and get more steadily paying users.",
  },
  {
    title: "Championships organizers",
    text: "Create a custom challenge, find sponsors and new faces with our help, we provide best conditions for those who strive to engage new champions into the eSports. ",
  },
  {
    title: "Others",
    text: "We are always open to new opportunities. If you have an idea that sounds interesting, don't be afraid to contact us. We totally welcome your ideas and will be happy to discuss opportunities.",
  },
];

function BecomeAnInvestor() {
  return (
    <>
      <div className="about__gradient__2"></div>
      <div className="problems_container">
        <div className="investor_container_image"></div>
        <div className="problems_container_inside">
          <h2 className="investor_header" style={{ textAlign: "center" }}>
            Become an investor
          </h2>
          <p className="investor_text">
            We view ourselves as a loyal and reliable partner and strive to meet
            the expectations of those who trust us. Investing into Cyberyal
            platform is not only an opportunity to join the board of owners of a
            fast growing company in a steadily growing market, it is also an
            access to a well established team of experienced professionals and
            young talents. After launching the Cyberyal platform our team will
            continue to release products, scaling the company by covering new
            topics and features.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href="https://drive.google.com/uc?export=download&id=1iC1dAVcJYtyNK18TAhlSlBdk5f7ajDxR">
              <button className="investor_button">Download one pager</button>
            </a>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "60px" }}>
        <h2 className="investor_header" style={{ textAlign: "center" }}>
          We are open for partnership
        </h2>
        <p className="investor_text">
          We have some great offers for all, who make, support and love video
          games
        </p>
        <div className="investor_cards">
          {requiredInfo.map((el, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                ease: "easeInOut",
                duration: 0.5,
                delay: 0.2 + index / 10,
              }}
            >
              <div className="investor_cards__card">
                <h4 style={{ marginBottom: "24px" }}>{el.title}</h4>
                <p>{el.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BecomeAnInvestor;
