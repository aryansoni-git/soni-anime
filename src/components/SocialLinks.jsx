import Link from "next/link";
import { Icon } from "./Navbar";

export default function SocialLinks() {
    return (
        <div className="flex items-center gap-3 justify-start sm:justify-center">
            <Link href="https://www.instagram.com/aryansoni.ig/" target="_blank">
                <Icon
                    src="/icons/instagram-svg.svg"
                    alt="Instagram"
                    addClassName={`invert`}
                />
            </Link>
            <Link href="https://www.linkedin.com/in/aryansoni-work/" target="_blank">
                <Icon
                    src="/icons/linkedin-svg.svg"
                    alt="LinkedIn"
                    addClassName={`invert`}
                />
            </Link>
            <Link href="https://github.com/aryansoni-git" target="_blank">
                <Icon
                    src="/icons/github.svg"
                    alt="LinkedIn"
                    addClassName={`p-1`}
                />
            </Link>
        </div>
    );
} 