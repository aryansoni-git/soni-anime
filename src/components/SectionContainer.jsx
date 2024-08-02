'use client';

import AnimeCard from "./AnimeCard";
import useScreenSize from "./useScreenSize";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import 'swiper/css/free-mode';
import 'swiper/css';

export default function SectionContainer({ heading, tagline, animeData, reverseDirection, delay, isSwiper, isTop }) {
    const isScreenSmall = useScreenSize(640);

    return (
        <section className={`${isTop ? `sm:shadow-section-shadow sm:z-10` : ``} flex flex-col gap-2 px-responsive-padding-x py-responsive-padding-y`}>
            <h1 className="text-xl font-bold lg:text-2xl xl:text-3xl">{heading}</h1>
            <p className="text-sm lg:text-base pb-3 xl:text-lg">{tagline}</p>
            {((!isScreenSmall && (isSwiper === true))) ?
                (<Swiper
                    freeMode={true}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{ delay: delay, disableOnInteraction: false, reverseDirection: reverseDirection }}
                    modules={[FreeMode, Autoplay]}

                    breakpoints={{
                        640: {
                            slidesPerView: 2
                        },
                        1024: {
                            slidesPerView: 3
                        },
                        1280: {
                            slidesPerView: 5
                        },
                    }}
                    className="h-full w-full"
                >
                    {animeData.map((anime, index) => (
                        <SwiperSlide key={index}>
                            <AnimeCard
                                anime={anime}
                                index={index}
                                key={anime.alt} />
                        </SwiperSlide>
                    ))}
                </Swiper>) : (
                    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                        {animeData.map((anime, index) => (
                            <div key={index}>
                                <AnimeCard
                                    anime={anime}
                                    index={index}
                                    key={anime.alt}
                                    isSmall={isScreenSmall} />
                            </div>
                        ))}
                    </div>
                )}
        </section>

    );
}