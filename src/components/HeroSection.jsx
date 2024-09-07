'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import AnimeDetails from './AnimeDetails';
import useScreenSize from './useScreenSize';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';

export default function HeroSection({ anime }) {
    const isScreenSmall = useScreenSize(640);

    const {
        coverList,
        logoList,
        episodeOneLink,
        descriptionList
    } = useMemo(() => anime, [anime]);

    return (
        <section className='relative h-screen w-full mt-[10vh]'>
            <Swiper
                loop={true}
                navigation
                slidesPerView={1}
                spaceBetween={30}
                pagination={{ clickable: true, type: 'progressbar' }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                modules={[Navigation, Pagination, Autoplay]}
                className="h-full"
            >
                {coverList.map((cover, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-full w-full flex justify-center items-end pb-12 sm:items-center sm:justify-normal">
                            {!isScreenSmall && 
                            <Image 
                                src={`./shadow-1.png`} 
                                alt='shadow' 
                                fill
                                priority
                                className='opacity-95 z-10' />}
                            <Image
                                src={!isScreenSmall ? cover.src : cover.srcMobile}
                                alt={cover.alt}
                                fill
                                priority
                                className="object-cover"
                            />
                            <AnimeDetails
                                src={logoList[index].src}
                                alt={logoList[index].alt}
                                href={episodeOneLink[index].href}
                                tags={['Dub', 'Sub', 'Action', 'Fantasy']}
                                description={descriptionList[index].description}
                                addClassName={`${(logoList[index].src === '/carousal/logo/2-ossan-adventurer-logo.png') ? 'border-[#FFFFFF]' : 'border-[#272727]'} text-lg`}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
