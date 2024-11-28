import React from 'react';
import Hero from '../components/Hero';
import ResearchAreas from '../components/ResearchAreas';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <main>
      <Hero />
      <ResearchAreas />
      <Projects />
      <Blog />
      <Newsletter />
    </main>
  );
}