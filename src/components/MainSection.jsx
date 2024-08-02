import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import Banner from './Banner';
import HeroSection from './HeroSection';
import loadAnimeData from '@/data/LoadAnimeData';

// Dynamically import SectionContainer to reduce initial load time
const SectionContainer = dynamic(() => import('./SectionContainer'));

export default function MainSection() {
    const animeData = useMemo(() => loadAnimeData(), []);

    const { animeListJuly, animeMovies, favouriteAnime, bannerAnime } = animeData;

    return (
        <main className="flex flex-col">
            <HeroSection anime={animeData} />
            <SectionContainer
                heading="July 2024 Seasonal Popular"
                tagline="Check out the first few episodes of these new shows for free!"
                animeData={animeListJuly}
                reverseDirection={true}
                delay={3000}
                isSwiper={true}
                isTop={true}
            />
            <Banner anime={bannerAnime[0]} />
            <SectionContainer
                heading="Must Watch Movie"
                tagline="Check out the best anime movies of all time for free! (Download Available)"
                animeData={animeMovies}
                delay={3000}
                isSwiper={true}
            />
            <Banner anime={bannerAnime[1]} />
            <SectionContainer
                heading="Most Popular of All Time"
                tagline="Check out some of the most popular animes of all time (Season 1)"
                animeData={favouriteAnime}
                delay={2000}
                isSwiper={false}
            />
            <Banner anime={bannerAnime[2]} isLast={true} />
        </main>
    );
}
