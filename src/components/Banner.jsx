import Link from "next/link"
import Image from "next/image"

export default function Banner({ anime, isLast }) {
    const spanStyles = `bg-warm-orange font-medium text-xs px-3 py-2 rounded-sm shadow-btn-shadow sm:text-sm md:text-base lg:text-lg xl:text-xl lg:px-6 lg:py-3`;
    const paraStyles = `text-xl font-semibold text-center sm:text-2xl`;

    return (
        <section className="h-full w-full px-responsive-padding-x cursor-pointer">
            <div className="relative">
                <Link href={anime.href} target="_blank" rel="noopener">
                    <Image
                        src={anime.src}
                        alt={anime.alt}
                        height={1000}
                        width={1000}
                        loading="lazy"
                        className="object-cover aspect-video max-h-[30rem] w-full"
                    />
                </Link>
                <div className="absolute bottom-2 flex gap-5 justify-between items-center w-full px-responsive-padding-x">
                    <span className={spanStyles}>WATCH NOW</span>
                    <span className={`${spanStyles} hidden sm:block`}>{anime.alt}</span>
                </div>
            </div>

            {isLast ?
                (<div className="flex flex-col gap-5 items-center my-12 relative cursor-default">
                    <div>
                        <Image
                            src={`./sleeping-cats.png`}
                            alt="Sleeping Cats"
                            height={500}
                            width={500}
                            className="h-28 w-full sm:h-36"
                        />
                    </div>
                    <div>
                        <p className={paraStyles}>Still looking for something to watch?</p>
                        <p className={paraStyles}>Check out our full library</p>
                    </div>
                    <Link
                        href={`https://anitaku.pe/home.html`}
                        className="border-[0.5px] border-warm-orange px-5 py-2 hover:bg-warm-orange cursor-pointer sm:px-6 sm:py-3 sm:text-lg"
                    >VIEW ALL
                    </Link>
                </div>)
                : ''}
        </section>
    )
}