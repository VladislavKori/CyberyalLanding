import GameController from "../public/assets/GameController.svg";
import ArrowRight from "../public/assets/ArrowRight.svg";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import close_modal from "../public/assets/close_modal.svg";
import Modal from "react-modal";
import React, { useEffect, useState } from "react";
import apiClient from "@/api/apiClient";

function Hero({ modal_text, form_header, form_text, form_button }: any) {
  const [utmParams, setUtmParams] = useState<any>({});

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") {
        const getParam = (param: any) => {
          const urlParams = new URL(window.location.toString()).searchParams;
          return urlParams.get(param) || "";
        };

        const utmSource = getParam("utm_source");
        const utmMedium = getParam("utm_medium");
        const utmCampaign = getParam("utm_campaign");
        const utmContent = getParam("utm_content");
        const utmTerm = getParam("utm_term");
        const utmSky = getParam("utm_sky");

        setUtmParams({
          utm_source: utmSource,
          utm_medium: utmMedium,
          utm_campaign: utmCampaign,
          utm_content: utmContent,
          utm_term: utmTerm,
          utm_sky: utmSky,
        });
      }
    };
  }, []);

  // console.log("utmParams", utmParams);

  const validationSchema = z.object({
    email: z.string().min(1, { message: "Please write your email" }).email({
      message: "You entered your email incorrectly",
    }),
    privacy: z.literal(true, {
      errorMap: () => ({ message: "You must accept Privacy Policy" }),
    }),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    // console.log(data);
    apiClient
      .post(``, {
        utm: utmParams,
        email: data.email,
      })
      .then((response: any) => {
        setIsOpen(true);
      })
      .catch((error: any) => {
        console.log(error.message);
      });
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        overlayClassName="Overlay"
        className="Modal"
        contentLabel="Example Modal"
      >
        <div className="modal">
          <Image
            onClick={() => setIsOpen(false)}
            className="modal__close"
            src={close_modal}
            alt="so-icons"
          />
          <div className="modal__content">
            <h3 className="modal__title">Congratulations</h3>
            <p className="modal__text">{modal_text}</p>
            <p className="modal__text">
              Thank you for your attention to our product
            </p>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              <button
                className="modal__button"
                onClick={() => setIsOpen(false)}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <div className="hero">
        <div className="hero__section_1">
          <Image className="socials__icon" src={GameController} alt="gamepad" />
          <h3 className="hero__section_1__title">
            Take your gaming to the next level
          </h3>
          <p className="hero__section_1__text">
            Unlock your full gaming potential with our expert coaching. Our team
            of experienced gamers will help you improve your skills, climb the
            ranks, and dominate the game.{" "}
          </p>
        </div>
        <div className="hero__section_2">
          <div className="hero__section_2__start">
            <h3 className="hero__section_2__start__title">Start</h3>
            <p className="hero__section_2__start__text">
              Achieve your best shape with CYBERYAL!
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="hero__section_2__subscribe" id="ref">
              <h3 className="hero__section_2__subscribe__title">
                {form_header}
              </h3>
              <p className="hero__section_2__subscribe__text">{form_text}</p>
              <hr className="hero__section_2__subscribe__divider" />

              <p className="hero__section_2__subscribe__email">You Email</p>
              <input
                {...register("email")}
                type="text"
                className={`hero__section_2__subscribe__input ${
                  errors.email ? "hero__section_2__subscribe__input_error" : ""
                }`}
                placeholder="Enter your Email"
              />
              {errors.email || errors.privacy ? (
                <div className="hero__section_2__subscribe__input_text_error">
                  <div>{errors.email?.message}</div>{" "}
                  <div>{errors.privacy?.message}</div>
                </div>
              ) : (
                ""
              )}
              <label className="hero__section_2__subscribe__privacy">
                <input
                  {...register("privacy")}
                  type="checkbox"
                  className={`hero__section_2__subscribe__checkbox ${
                    errors.email
                      ? "hero__section_2__subscribe__checkbox_error"
                      : ""
                  }`}
                />
                I agree with the Privacy Policy
              </label>
              <div style={{ width: "100%", marginTop: "auto" }}>
                <button
                  className="hero__section_2__subscribe__button"
                  type="submit"
                >
                  {form_button} <Image src={ArrowRight} alt="ArrowRight" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Hero;
