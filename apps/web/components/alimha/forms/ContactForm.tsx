"use client";
import React, { FC } from "react";
import Input from "../Input";
import TextArea from "../TextArea";
import ButtonGradientStyle1 from "../buttons/ButtonGradientStyle1";
import { toast } from "sonner";

interface ContactFormProps {
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    buttonText: string;
}

const ContactForm: FC<ContactFormProps> = ({
    namePlaceholder,
    emailPlaceholder,
    messagePlaceholder,
    buttonText,
}) => {
    async function handleSubmit(e: any) {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "cfc359c9-8196-4e5f-86bf-24d0658ceb45",
                name: e.target.name.value,
                email: e.target.email.value,
                subject: "Alimha & Company",
                message: e.target.message.value,
            }),
        });
        const result = await response.json();

        if (result.success) {
            e.target.name.value = "";
            e.target.email.value = "";
            e.target.message.value = "";
            toast.success("Votre message a été envoyé avec succès. Merci !");
        } else {
            toast.error(
                "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer s'il vous plaît."
            );
        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="bg-white px-10 py-7 items-center border rounded-3xl z-10"
            >
                <div className="flex flex-col items-center justify-around h-[330px] sm:h-[482px]">
                    <Input
                        type="text"
                        name="name"
                        placeholder={namePlaceholder}
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder={emailPlaceholder}
                    />
                    <TextArea name="message" placeholder={messagePlaceholder} />
                    <div className="w-full">
                        <ButtonGradientStyle1
                            text={buttonText}
                            fromColor="from-primary-blue"
                            toColor="to-primary-blue"
                        />
                    </div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;
