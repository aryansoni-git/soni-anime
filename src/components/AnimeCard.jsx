'use client';

import Image from "next/image";
import { useState } from "react";
import PlayButton from "./PlayButton";
import useScreenSize from "./useScreenSize";
import HoveredAnimeCard from "./HoveredAnimeCard";
import { textShortner } from "./HoveredAnimeCard";

export default function AnimeCard({ anime, isSmall }) {
    const isScreenSmall = useScreenSize(640);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative h-full w-full"

        >
            <div key={anime.alt} className="flex flex-col gap-2 md:grid">
                <div>
                    <Image
                        src={anime.src}
                        alt={anime.alt}
                        height={1000}
                        width={1000}
                        loading="lazy"
                        className="object-cover h-full w-full relative apsect-[9/16]"
                    />
                </div>
                <h4 className="text-xs xs:text-sm sm:text-base h-10">{isScreenSmall ? textShortner(anime.title, 7, 30) : textShortner(anime.title, 7, 70)}</h4>
                <div className="flex gap-1 text-xs">
                    <span>Sub</span>
                    <span>{anime.dubbed ? '| Dub' : ''}</span>
                </div>
                {(anime.isMovie !== true) ?
                    (<PlayButton
                        href={anime.href}
                        text={!isSmall ? `Watch Season 1` : `Watch Now`}
                        addClassName="text-xs sm:text-sm sm:rounded-sm"
                        value={isScreenSmall ? 15 : 25}
                        />) :
                    (<PlayButton
                        href={anime.downloadLink}
                        text={`Download Now`}
                        isMovie={true}
                        addClassName="text-xs sm:text-sm sm:rounded-sm"
                        value={isScreenSmall ? 15 : 25}
                    />)}
            </div>
            <HoveredAnimeCard anime={anime} isHovered={isHovered} />
        </div>
    );
}