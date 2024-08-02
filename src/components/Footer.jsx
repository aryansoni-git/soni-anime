import Link from "next/link";
import { Icon } from "./Navbar";
import SocialLinks from "./SocialLinks";

function FooterTop() {
    return (
        <div className="flex flex-col gap-5 justify-around items-center text-center py-10 lg:flex-row lg:gap-0">
            <h1 className="text-3xl font-black flex gap-px"><Icon src={`/icons/logo.svg`} alt={`Logo Icon`} />ryan soni</h1>
            <address className="flex flex-col gap-2 w-full text-start pl-responsive-padding-x sm:w-auto sm:text-center sm:pl-0">
                <span className="text-base not-italic">Need Support?</span>
                <Link href="mailto:aryansoni.work@gmail.com" className="text-lg not-italic">aryansoni.work@gmail.com</Link>
            </address>
            <address className="flex flex-col gap-2 text-start w-full pl-responsive-padding-x sm:w-auto sm:text-center sm:pl-0">
                <span className="text-base not-italic">Follow Me</span>
                <SocialLinks />
            </address>
        </div>
    );
}

function FooterBottom() {
    return (
        <div className="flex justify-center items-center w-full py-5 border-t-[1px] border-[#c0c0c0] ">
            <p><small>&copy; 2024 ARYAN SONI. ALL RIGHTS RESERVED.</small></p>
        </div>
    );
}

export default function Footer() {
    return (
        <footer className="flex flex-col bg-[#272727]">
            <FooterTop />
            <FooterBottom />
        </footer>

    );
}