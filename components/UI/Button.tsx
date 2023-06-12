import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import Image from 'next/image'
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import apiClient from "@/api/apiClient";
import Modal from "react-modal";

// icons
import CloseModalIcon from "@/public/assets/close_modal.svg";
import ArrowRight from "@/public/assets/ArrowRight.svg";

interface ButtonProps {
  className?: string
}

function Button({ className }: ButtonProps) {

  const router = useRouter();
  if (typeof window !== "undefined") {
    var element = document.getElementById("ref");
  }

  const isPrivacy = router.pathname === "/privacy";
  const isHome = router.pathname === "/home";
  const isLanding = router.pathname === "/";

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
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    // console.log(data);
    apiClient
      .post(`api/v1/cyberyal/set`, {
        utm: utmParams,
        email: data.email,
      })
      .then((response: any) => {
        setIsOpen(false);
        setIsOpenCongrat(true);
      })
      .catch((error: any) => {
        console.log(error.message);
        // setIsOpen(false);
        // setIsOpenCongrat(true);
      });
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalCongratIsOpen, setIsOpenCongrat] = React.useState(false);
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
          <CloseModalIcon
            onClick={() => setIsOpen(false)}
            className="modal__close"
          />
          <div className="modal__content">
            <h3 className="modal__title">Cyberyal ID</h3>
            <p className="modal__text">
              Challenge players of your own skill level in your preferred
              games. Participate in tournaments and secure your portion of
              rewards. Join now!
            </p>
            <form className="cidmodal__form" onSubmit={handleSubmit(onSubmit)}>
              <p className="cidmodal__input-lable">Your Email</p>
              <input
                {...register("email")}
                type="text"
                className={`cidmodal__input ${errors.email
                  ? "hero__section_2__subscribe__input_error"
                  : ""
                  }`}
                placeholder="Enter your Email"
              />
              <label
                className="cidmodal__checkbox-lable"
                style={{ marginTop: "8px" }}
              >
                <input
                  {...register("privacy")}
                  type="checkbox"
                  className={`cidmodal__checkbox ${errors.email
                    ? "hero__section_2__subscribe__checkbox_error"
                    : ""
                    }`}
                />
                I agree with the{" "}
                <Link href={"/privacy"} className="modal__link">
                  Privacy Policy
                </Link>
              </label>

              {/* Error Output */}
              <div className="modal__error">
                {errors.email || errors.privacy ? (
                  <div className="modal__error-text">
                    <div>{errors.email?.message}</div>{" "}
                    <div>{errors.privacy?.message}</div>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div style={{ width: "100%", marginTop: "auto" }}>
                <button
                  className="header__btn modal__btn cidmodal__btn"
                  type="submit"
                >
                  Create Cyberyal ID
                  <ArrowRight className="modal__arrow-right" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>

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
          <div className="modal__content" style={{textAlign: 'center'}}>
            <h3 className="modal__title">Congratulations</h3>
            <p className="modal__text">You are successful created an account to participate in the Cyberyal Affilate program.</p>
            <p className="modal__text">Complete simple tasks and receive rewards! accomplish engaging and easy tasks, and then collect your well-deserved rewards. </p>
            <p className="modal__text">Thank you for your attention to our product</p>
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

      <button
        className={"header__btn" + " " + className}
        style={{ display: "flex", alignItems: "center" }}
        onClick={() => setIsOpen(true)}
      >
        Create Cyberyal ID
      </button>
    </>
  );
}

export default Button