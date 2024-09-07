import Link from "next/link";
import Image from "next/image";

export default function ContactInfo() {
    return (
        <section className="flex flex-col justify-center items-center pt-10 px-2 pb-responsive-padding-y lg:items-start lg:max-w-md lg:sticky lg:top-0 lg:h-full">
            <h1 className="text-start text-3xl font-bold mb-8 lg:text-5xl">Let&apos;s make it a reality!</h1>
            <p className="mb-10 text-gray-200 text-lg text-center lg:text-start">I&apos;m really excited to work with you soon! Please share your details & I&apos;ll get back in 2-3 working days.</p>
            <div>
                <h1 className="text-3xl font-bold not-italic text-center lg:text-left lg:text-2xl group">Contact</h1>
                <Link href="mailto:aryansoni.work@gmail.com" className="flex gap-2 items-center text-lg not-italic text-gray-200">
                    <Image
                        src="./icons/mail.svg"
                        alt="Email icon: aryansoni.work@gmail.com"
                        height={20}
                        width={20}
                        className="relative -bottom-px invert"
                    />
                    aryansoni.work@gmail.com
                </Link>
            </div>
        </section>
    );
}