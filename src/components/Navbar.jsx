'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import useScreenSize from "./useScreenSize";

export function Icon({ src, alt, addClassName }) {
    return (
        <Image
            src={src}
            alt={alt}
            height={30}
            width={30}
            className={`${addClassName} cursor-pointer`}
        />
    );
}

function MenuList({ isLargeScreen = true, isOpen }) {
    function List({ href, text }) {
        return (
            <li className="font-semibold p-5 pt-3 sm:p-8 lg:pt-0 lg:p-0 lg:cursor-pointer">
                <Link
                    href={href}
                    className={!isLargeScreen ? `hover:text-warm-orange hover:font-semibold hover:underline hover:underline-offset-8 hover:decoration-dashed` : ``}
                >{text}
                </Link>
            </li>
        );
    }

    return (
        <ul className={`${isLargeScreen ? (isOpen ? `bg-black bg-opacity-80 fixed inset-0 flex flex-col mt-16 z-50 h-fit rounded-md sm:flex-row sm:justify-between` : `hidden`) : `flex flex-1 justify-evenly items-center group`}`}>
            <List
                href={`https://anitaku.pe/anime-list.html`}
                text={`Anime List`} />
            <List
                href={`https://anitaku.pe/new-season.html`}
                text={`New Season`} />
            <List
                href={`https://anitaku.pe/anime-movies.html`}
                text={`Movies`} />
            <List
                href={`https://anitaku.pe/popular.html`}
                text={`Popular`} />
        </ul>
    );
}

export default function Navbar() {
    const isLargeScreen = useScreenSize(1024);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => { setIsOpen(!isOpen) };

    return (
        <nav className="bg-[#272727] h-[10vh] fixed flex justify-between w-full z-[9999] lg:px-responsive-padding-x">
            {isLargeScreen &&
                <button
                    onClick={handleOpen}
                    className={`${isOpen ? `bg-black` : ``} px-5 lg:px-0`}
                >
                    <Icon
                        src={!isOpen ? `./icons/menu.svg` : `./icons/close-menu.svg`}
                        alt={`Menu Icon`}
                    />
                </button>}
            <MenuList
                isLargeScreen={isLargeScreen}
                isOpen={isOpen}
            />
            <Link
                href={`/`}
                className="lg:-order-1 self-center"
            >
                <Icon
                    src={`./icons/logo.svg`}
                    alt={`Logo Icon`}
                    addClassName={`hover:scale-110`}
                />
            </Link>
            <Link href={`/contact`}>
                <Icon
                    src={`./icons/hello.svg`}
                    alt={`Say Hello Icon`}
                    addClassName={`hover:scale-150 h-full mr-5 lg:mr-0`}
                />
            </Link>
        </nav>
    );
}