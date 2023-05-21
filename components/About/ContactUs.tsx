import apiClient from "@/api/apiClient";
import { motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import ArrowRight from "../../public/assets/ArrowRight.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import close_modal from "../../public/assets/close_modal.svg";

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
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    console.log(data);
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
          <Image
            onClick={() => setIsOpenCongrat(false)}
            className="modal__close"
            src={close_modal}
            alt="so-icons"
          />
          <div className="modal__content">
            <h3 className="modal__title">Congratulations</h3>
            <p className="modal__text">
              You are successfully created an account to participate in the
              Cyberyal Affilate program. Complete simple tasks and receive
              rewards! accomplish engaging and easy tasks, and then collect your
              well-deserved rewards.
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
      <div className="about_us">
        <motion.form
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 0.6,
            delay: 0.6,
          }}
          onSubmit={handleSubmit(onSubmit)}
          style={{ borderRadius: "20px" }}
        >
          <div className="about_us_form" id="ref">
            <h2 style={{ textAlign: "center" }}>Contact us</h2>
            <p
              className="hero__section_2__subscribe__text"
              style={{
                textAlign: "center",
                opacity: "0.5",
                marginBottom: "30px",
              }}
            >
              If you want to know more about investment opportunity or want to
              join the Cyberyal project as a partner
            </p>

            <p className="hero__section_2__subscribe__email">Your Name</p>
            <input
              {...register("name")}
              type="text"
              className={`hero__section_2__subscribe__input ${
                errors.name ? "hero__section_2__subscribe__input_error" : ""
              }`}
              placeholder="Enter your name"
            />
            <p className="hero__section_2__subscribe__email">Your Email</p>
            <input
              {...register("email")}
              type="text"
              className={`hero__section_2__subscribe__input ${
                errors.email ? "hero__section_2__subscribe__input_error" : ""
              }`}
              placeholder="Enter your Email"
            />
            <p className="hero__section_2__subscribe__email">Message</p>
            <input
              {...register("message")}
              type="text"
              className={`hero__section_2__subscribe__input ${
                errors.message ? "hero__section_2__subscribe__input_error" : ""
              }`}
              placeholder="Enter your message"
            />
            <div
              className="hero__section_2__subscribe__input_text_error"
              style={{ height: "70px" }}
            >
              {errors.email ||
              errors.privacy ||
              errors.name ||
              errors.message ? (
                <>
                  <div>{errors.email?.message}</div>
                  <div>{errors.name?.message || errors.message?.message}</div>
                  <div>{errors.privacy?.message}</div>
                </>
              ) : (
                ""
              )}
            </div>
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
              I agree with the{" "}
              <Link href={"/privacy"} className="privacy_link">
                Privacy Policy
              </Link>
            </label>
            <div style={{ width: "100%", marginTop: "auto" }}>
              <button
                className="hero__section_2__subscribe__button"
                type="submit"
              >
                Send message <Image src={ArrowRight} alt="ArrowRight" />
              </button>
            </div>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 0.4,
            delay: 0.4,
          }}
          className="about_us_image"
          style={{ borderRadius: "20px" }}
        ></motion.div>
      </div>
    </>
  );
}

export default ContactUs;
