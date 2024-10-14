import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "hero-image": "url(../public/assets/hero-image.png)",
                "why-us-bg-image": "url(../public/assets/why-us-bg-image.png)",
                "sendmo-download-app-bg":
                    "url(../public/assets/sendmo-download-app-bg.png)",
                "sendmo-contact-bg": "url(../public/assets/line-vector4.png)",
                "alpay-advantages-bg": "url(../public/assets/dots-world.png)",
                "alpay-how-it-works-bg": "url(../public/assets/wavy-lines.png)",
            },
            colors: {
                "primary-blue": "#0039BA",
                "secondary-blue": "#0067F8",
                tertiary: "rgba(226, 241, 255, 1)",
                "dark-blue": "#001036",
                "gray-1": "#969696",
                "gray-2": "#ACACAC",
                "orange-1": "#FF5500",
                "green-1": "#20CB70",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
