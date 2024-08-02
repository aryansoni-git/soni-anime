import FormTop from "./FormTop";
import FormBottom from "./FormBottom";

export default function ContactForm() {
    return (
        <form action="/api/contact" method="POST" className="bg-[#0c0c0c] border-[1px] border-[#272727] rounded-lg px-4 py-8 w-full lg:max-w-lg group">
            <h1 className="text-center text-2xl font-bold mb-4 mt-2 group-hover:text-warm-orange">GET IN TOUCH</h1>
            <FormTop />
            <FormBottom />
        </form>
    );
}