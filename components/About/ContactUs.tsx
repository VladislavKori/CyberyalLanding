import apiClient from "@/api/apiClient";
import { motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import Input from "../UI/Input";

// icons
import CloseModalIcon from "@/public/assets/close_modal.svg";
import ArrowRight from "../../public/assets/ArrowRight.svg";

// animations 
import { smoothFromBottom } from "@/data/animations";

function ContactUs() {
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

  const validationSchema = z.object({
    email: z.string().min(0, { message: "Please fill the form" }).email({
      message: "You entered your email incorrectly",
    }),
    name: z.string().min(1, { message: "Please fill the form" }),
    message: z.string().min(1, { message: "Please fill the form" }),

    privacy: z.literal(true, {
      errorMap: () => ({ message: "You must accept Privacy Policy" }),
    }),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    apiClient
      .post(`api/v1/mailer/set`, {
        email: data.email,
        name: data.name,
        message: data.message,
        utm: utmParams,
      })
      .then((response: any) => {
        setIsOpenCongrat(true);
      })
      .catch((error: any) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: "", name: "", message: "" });
    }
  }, [formState, reset]);

  const [modalCongratIsOpen, setIsOpenCongrat] = useState(false);
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
        isOpen={modalCongratIsOpen}
        onRequestClose={() => setIsOpenCongrat(false)}
        style={customStyles}
        overlayClassName="Overlay"
        className="Modal"
        contentLabel="Example Modal"
      >
        <div className="modal">
          <CloseModalIcon
            onClick={() => setIsOpenCongrat(false)}
            className="modal__close"
          />
          <div className="modal__content" style={{ textAlign: "center" }}>
            <h3 className="modal__title">Congratulations</h3>
            <p className="modal__text">
              You are successful created an account to participate in the
              Cyberyal Affilate program.
            </p>
            <p className="modal__text">
              Complete simple tasks and receive rewards! accomplish engaging and
              easy tasks, and then collect your well-deserved rewards.{" "}
            </p>
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
                onClick={() => setIsOpenCongrat(false)}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <div className="contactus">
        <motion.form
          className="contactus__form"
          {...smoothFromBottom(0.4, 0.5)}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="contactus__inner" id="ref">
            <h2 className="contactus__title">Contact us</h2>
            <p className="contactus__subtitle">
              If you want to know more about investment opportunity or want to
              join the Cyberyal project as a partner
            </p>

            <Input
              id="name"
              register={register}
              type="text"
              className={`contactus__input ${
                errors.name ? "hero__section_2__subscribe__input_error" : ""
              }`}
              placeholder="Enter your name"
              lable="Your Name"
            />
            {errors.name ? (
              <div className="modal__error-text">
                <div>{errors.name?.message || errors.message?.message}</div>
              </div>
            ) : null}

            <Input
              id="email"
              register={register}
              type="text"
              className={`contactus__input ${
                errors.email ? "hero__section_2__subscribe__input_error" : ""
              }`}
              placeholder="Enter your Email"
              lable="Your Email"
            />
            {errors.email ? (
              <div className="modal__error-text">
                <div>{errors.email?.message}</div>
              </div>
            ) : null}

            <Input
              id="message"
              register={register}
              type="text"
              className={`contactus__input ${
                errors.message ? "hero__section_2__subscribe__input_error" : ""
              }`}
              placeholder="Enter your message"
              lable="Message"
            />
            {errors.message ? (
              <div className="modal__error-text">
                <div>{errors.message?.message}</div>
              </div>
            ) : null}

            <label className="cidmodal__checkbox-lable contactus__checkbox">
              <input
                {...register("privacy")}
                type="checkbox"
                className={`cidmodal__checkbox ${
                  errors.email
                    ? "hero__section_2__subscribe__checkbox_error"
                    : ""
                }`}
              />
              I agree with the
              <Link href={"/privacy"} className="modal__link">
                Privacy Policy
              </Link>
            </label>
            {errors.message ? (
              <div className="modal__error-text">
                <div>{errors.privacy?.message}</div>
              </div>
            ) : null}

            <button
              className="header__btn modal__btn cidmodal__btn contactus__btn"
              type="submit"
            >
              Send message
              <ArrowRight className="modal__arrow-right" />
            </button>
          </div>
        </motion.form>

        <motion.div
          {...smoothFromBottom(0.4, 0.4)}
          className="contactus__image"
        ></motion.div>
      </div>
    </>
  );
}

export default ContactUs;
