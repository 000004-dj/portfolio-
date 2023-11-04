import React from "react";
import s from "./Contact.module.scss"
import {TitleText} from "../../additionaly-components/TitleText/TitleText";
import {CustomButton} from "../../additionaly-components/CustomButton/CustomButtom";
import {useForm} from "react-hook-form";
import emailjs from "emailjs-com"
import {toast} from "react-toastify";
const Fade = require("react-reveal/Fade");
interface IFormInput {
    email: string;
    telephone: string;
    message: string;
}

export const Contact = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        defaultValues: {
            email: '',
            telephone: '',
            message: '',
        }
    })
    const onSubmit = (data: IFormInput) => {
        console.log(data.message, data.telephone)
        // @ts-ignore
        emailjs.send('service_wx8iwum', 'template_k2vk4bp', data, 'H-30kYTAjSXc5lISG')
            .then(() => {
                toast.success(`Thank you ${data.email}`)
                reset()
            }, (error) => {
                toast.error(error.message)
            });

    };

    return (
        <>
            <br/>
            <TitleText
                title={"get in touch"}
                smallTitle={"CONTACT ME"}
            />
            <br/>
            <div className={s.Contact} id={"Contact"}>
                <form onSubmit={handleSubmit(onSubmit)} className={s.container}>

                    <Fade right>
                    <input type="text" placeholder={"Your Email"}
                           className={errors.email?.message && "error"}
                           {...register("email",
                               {required: "this is required"})} />
                    <p style={{color: "red", marginTop: "-15px"}}>{errors.email?.message}</p>
                    </Fade>

                    <Fade left>
                    <input type="text" placeholder={"Your telephone number"}
                           className={errors.telephone?.message && "error"}
                           {...register("telephone",
                               {required: "this is required"})}/>
                    <p style={{color: "red", marginTop: "-15px"}}>{errors.telephone?.message}</p>
                    </Fade>

                    <Fade right>
                    <input type="text" placeholder={"Your massage"}
                           className={s.textInput + `${errors.message?.message && " error"}`}
                           {...register("message", {required: "this is required"})}/>
                    <p style={{color: "red", marginTop: "-15px"}}>{errors.message?.message}</p>
                    </Fade>

                    <br/>
                    <Fade bottom>
                    <CustomButton
                        buttonTitle={"CONTACT"}
                        design={"light"}
                        buttonIcon={''}
                    />
                    </Fade>

                </form>
            </div>
        </>
    )
}