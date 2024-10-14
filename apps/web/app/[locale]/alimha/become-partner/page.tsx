import Image from "next/image";
import logo from "@/public/assets/alimha-logo.png";
import { useTranslations } from "next-intl";
import BecomePartnerForm from "@/components/alimha/forms/BecomePartnerForm";

export default function Page() {
    const t = useTranslations("AlimhaPage.CareerPage");
    return (
        <main className="w-full h-fit pt-32 pb-20">
            <section className="flex justify-center w-full h-full px-5">
                <div className="flex flex-col gap-4 bg-white border w-full sm:w-2/3 md:w-1/2 lg:w-1/2 2xl:w-1/3 h-fit p-5 rounded-3xl shadow-md">
                    <div className="flex justify-center items-center bg-white shadow-inner w-full h-[300px] rounded-2xl">
                        <Image src={logo} alt="alimha's logo" height={100} />
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-[#333333] text-sm lg:text-base min-[1200px]:text-lg"></p>
                        <BecomePartnerForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
