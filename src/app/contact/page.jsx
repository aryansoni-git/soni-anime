import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

export const metadata = {
    title: "Contact Us - Aryan Soni | Frontend Developer & UI/UX Developer | Web Development Solutions",
    description: "Experienced Frontend & UI/UX Developer in Jabalpur. Specializing in responsive, dynamic web applications with expertise in HTML, CSS, JavaScript, React, Next.js and Tailwind CSS. Let's innovate together!",
    keywords: "contact Sonianime, anime streaming support, feedback, anime requests, customer support, get in touch",
    metadataBase: new URL("https://soni-anime.vercel.app"),
    openGraph: {
        title: "Contact Us - Sonianime",
        description: "Reach out to the Soni-Anime team with any questions or feedback. We are here to improve your anime streaming experience.",
        url: "https://soni-anime.vercel.app/contact",
        images: [
            {
                url: "/soni-anime-contact-page-cover.jpg",
                alt: "Contact soni-anime: Aryan Soni",
            },
        ],
    }
};


export default function Page() {
    return (
        <section className="flex flex-col justify-center px-2 mt-[15vh] md:px-10 lg:flex-row lg:gap-10 lg:items-start lg:py-responsive-padding-y">
            <ContactForm />
            <ContactInfo />
        </section>
    );
}