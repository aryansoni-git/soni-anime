'use client';

import Link from "next/link";
import { Icon } from "./Navbar";
import { useMemo } from "react";
import useScreenSize from "./useScreenSize";

export function textShortner(description, limit, upto) {
    if (!description) return '';
    return description.split(' ').length > limit ? description.slice(0, upto) + `...` : description;
}

export default function HoveredAnimeCard({ anime = {}, isHovered }) {
    const isScreenSmall = useScreenSize(640);

    const hoveredStyles = useMemo(() => `absolute top-0 flex flex-col gap-2 text-sm bg-[#272727] p-5 opacity-95 z-50 ${(anime.isMovie ? 'h-[92%] w-full' : 'h-full w-full')}`, [anime.isMovie])

    return (
        (!isScreenSmall && isHovered) &&
        (
            <Link href={anime.href} target="_blank" rel="noopener" className={hoveredStyles}>
                <h4 className="font-semibold">{anime.title}</h4>
                <span className="flex gap-2">
                    {anime.rating.number}
                    <Icon
                        src={`./icons/star.svg`}
                        alt={`rating star`}
                        addClassName={`h-[20px] w-[20px]`}
                    />
                    {anime.rating.review}
                </span>
                <span className="text-slate-200">{anime.seasonsNum} Season</span>
                <span className="text-slate-200">{anime.episodesNum} Episodes</span>
                <span>Status: {anime.animeStatus}</span>
                <p>{textShortner(anime.description, 30, 160)}</p>
                <div className="flex gap-5 h-full">
                    <Icon
                        src={`./icons/play-2.svg`}
                        alt={`play icon`}
                        addClassName={`hover:scale-110`} />
                    <Icon
                        src={`./icons/tag.svg`}
                        alt={`tag icon`}
                        addClassName={`hover:scale-110`} />
                    <Icon
                        src={`./icons/heart.svg`}
                        alt={`like icon`}
                        addClassName={`hover:scale-110`} />
                </div>
            </Link>
        )
    );
}