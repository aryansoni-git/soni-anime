import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

export default function Page() {
    return (
        <section className="flex flex-col justify-center px-2 mt-[15vh] md:px-10 lg:flex-row lg:gap-10 lg:items-start lg:py-responsive-padding-y">
            <ContactForm />
            <ContactInfo />
        </section>
    );
}