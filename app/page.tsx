import type { Metadata } from 'next';
import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Experiences from './_components/Experiences';
import Skills from './_components/Skills';
import ProjectList from './_components/ProjectList';

export const metadata: Metadata = {
    alternates: { canonical: '/' },
};

export default function Home() {
    return (
        <>
            <Banner />
            <AboutMe />
            <Skills />
            <Experiences />
            <ProjectList />
        </>
    );
}
