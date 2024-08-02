import Image from "next/image";
import PlayButton from "./PlayButton";

export default function AnimeDetails({ src, alt, tags, description, href, addClassName }) {
    return (
        <div className="flex flex-col gap-5 justify-center items-center px-responsive-padding-x z-20 sm:items-start sm:max-w-lg xl:max-w-xl xl:relative xl:top-16">
            <Image 
                src={src} 
                alt={alt} 
                height={120} 
                width={120} 
                className="h-auto w-auto" />
            <div className="hidden sm:flex gap-3 ">
                {tags.map((tag, index) => (
                    <span key={index} className={`border-2 rounded-lg font-medium text-xs px-2 py-1 xs:text-sm xs:px-3 xs:py-2 ${addClassName}`}>{tag}</span>
                ))}
            </div>
            <p className="hidden max-w-[90%] text-sm sm:text-base sm:block lg:max-w-max">{description}</p>
            <PlayButton text={`Start Watching E1`} href={href} addClassName={`px-6 py-3 rounded-lg font-semibold`} value={30} />
        </div>
    );
}