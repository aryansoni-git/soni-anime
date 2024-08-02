import Link from "next/link";
import Image from "next/image";

export default function PlayButton({ href, text, addClassName, isMovie, value }) {
     return (
        <Link
            href={href}
            target="_blank" rel="noopener"
            className={`bg-warm-orange font-medium flex justify-center items-center gap-2 py-2 z-50 hover:scale-105 ${addClassName}`}>
            <Image
                src={isMovie ? '/icons/download.svg' : `/icons/play.svg`}
                alt="play button"
                height={(value)}
                width={value}
                />
            {text}
        </Link>
    );
}