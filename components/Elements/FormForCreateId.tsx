import React from 'react'
import Button from '../UI/Button'
import Link from 'next/link';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import apiClient from '@/api/apiClient';
import Modal from "react-modal";

// icons
import ArrowRight from '@/public/assets/ArrowRight.svg';
import CloseModalIcon from "@/public/assets/close_modal.svg";

function FormForCreateId() {

    const [modalIsOpen, setIsOpen] = React.useState(false);
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
        apiClient
            .post(``, {
                email: data.email,
            })
            .then((response: any) => {
                setIsOpen(true);
            })
            .catch((error: any) => {
                console.log(error.message);
            });
    };

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
                overlayClassName="Overlay"
                className="Modal"
                contentLabel="Example Modal"
                style={customStyles}
            >
                <div className="modal">
                    <CloseModalIcon
                        onClick={() => setIsOpen(false)}
                        className="modal__close"
                    />
                    <div className="modal__content" style={{ textAlign: "center" }}>
                        <h3 className="modal__title">Congratulations</h3>
                        <p className="modal__text">
                            You are successful created an account to participate in the
                            Cyberyal Affiliate program.
                        </p>
                        <p className="modal__text">
                            Complete simple tasks and receive rewards! Accomplish engaging and
                            easy tasks, and then collect your well-deserved rewards.{" "}
                        </p>
                        <p className="modal__text">
                            Thank you for your attention to our product.
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
            <div className="formfcd">
                <h2 className="formfcd__title">Cyberyal ID</h2>
                <p className="formfcd__text">We're running the final tests of the platform and will be ready for the open beta test very soon.
                    Register now and get access to exclusive offers for first users!</p>
                <hr />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="formfcd__title_small">Your Email</h3>
                    <input {...register("email")} className="formfcd__input" placeholder='Enter your Email' />
                    {errors.email ? (
                        <div className="modal__error-text">
                            <div>{errors.email?.message}</div>
                        </div>
                    ) : ""}

                    <label className="cidmodal__checkbox-lable contactus__checkbox">
                        <input {...register("privacy")} type="checkbox" className="cidmodal__checkbox" />
                        <p>
                            I agree with the {" "}
                            <Link href={"/privacy"} className="modal__link">
                                Privacy Policy
                            </Link>
                            {" "} and {" "}
                            <Link href={"/termsofuse"} className="modal__link">
                                Terms of use
                            </Link>
                        </p>
                    </label>
                    {errors.privacy ? (
                        <div className="modal__error-text">
                            <div>{errors.privacy?.message}</div>
                        </div>
                    ) : ""}

                    <button className="formfcd__button" type="submit">
                        <p className="formfcd__button-text">Create Cyberyal ID</p>
                        <ArrowRight className="formfcd__button-arrow" />
                    </button>
                </form>
            </div>
        </>
    )
}

export default FormForCreateId
