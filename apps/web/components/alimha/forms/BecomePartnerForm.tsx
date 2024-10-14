"use client";
import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ButtonGradientStyle1 from "../buttons/ButtonGradientStyle1";
import { Textarea } from "@/components/ui/textarea";

import { useLocale, useTranslations } from "next-intl";
import { toast } from "sonner";

const BecomePartnerForm = () => {
    const localActive = useLocale();
    const t = useTranslations(
        "AlimhaPage.BecomePartnerPage.become partner form"
    );
    const [isLoading, setIsLoading] = useState(false);

    // ZOD Schema
    const formSchema = z.object({
        lastName: z.string().min(1, { message: t("field1 error message") }),
        firstName: z.string().min(1, { message: t("field2 error message") }),
        email: z.string().min(1, { message: t("field3 error message") }),
        description: z.string(),
    });

    type FormSchema = z.infer<typeof formSchema>;
    // End ZOD Schema

    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            lastName: "",
            firstName: "",
            email: "",
            description: "",
        },
    });

    const onSubmit = async (values: FormSchema, e: any) => {
        e.preventDefault();

        setIsLoading(true);

        const formData = new FormData();

        // Append form data fields
        formData.append("lastName", values.lastName);
        formData.append("firstName", values.firstName);
        formData.append("email", values.email);
        formData.append("description", values.description);

        // Send mail to Alimha
        const response = await fetch(
            "http://localhost:3333/become-partner-mail",
            {
                method: "POST",
                body: formData,
            }
        );

        if (response.ok) {
            form.reset(); // Clear form on success
            toast.success(t("success message"));
        } else {
            toast.error(t("error message"));
        }

        setIsLoading(false);
    };

    return (
        <Form {...form}>
            <form
                id="career-form"
                method="POST"
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4 pb-5"
            >
                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-semibold text-[#333333] text-sm lg:text-base min-[1200px]:text-lg">
                                {t("field1")}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    type="text"
                                    className="bg-[#F8FAFC] border border-[#EDEDED] text-base w-full h-12 rounded-lg outline-none"
                                />
                            </FormControl>
                            <FormMessage className="text-xs lg:text-sm tracking-wide" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-semibold text-[#333333] text-sm lg:text-base min-[1200px]:text-lg">
                                {t("field2")}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    type="text"
                                    className="bg-[#F8FAFC] border border-[#EDEDED] text-base w-full h-12 rounded-lg outline-none"
                                />
                            </FormControl>
                            <FormMessage className="text-xs lg:text-sm tracking-wide" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel className="font-semibold text-[#333333] text-sm lg:text-base min-[1200px]:text-lg">
                                {t("field3")}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    type="text"
                                    className="bg-[#F8FAFC] border border-[#EDEDED] text-base w-full h-12 rounded-lg outline-none"
                                />
                            </FormControl>
                            <FormMessage className="text-xs lg:text-sm tracking-wide" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel className="font-semibold text-[#333333] text-sm lg:text-base min-[1200px]:text-lg">
                                {t("field4")}
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    {...field}
                                    className="bg-[#F8FAFC] border border-[#EDEDED] focus:border-dark-blue text-base w-full rounded-lg outline-none"
                                    rows={5}
                                />
                            </FormControl>
                            <FormMessage className="text-xs lg:text-sm tracking-wide" />
                        </FormItem>
                    )}
                />

                <div className="mt-4">
                    <ButtonGradientStyle1
                        fromColor="from-primary-blue"
                        toColor="to-primary-blue"
                        text={t("send")}
                        width="w-full"
                        disabled={isLoading}
                    />
                </div>
            </form>
        </Form>
    );
};

export default BecomePartnerForm;
