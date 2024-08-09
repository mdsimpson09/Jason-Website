import React from 'react';
import Link from 'next/link';
import Services from './Components/Services';
import About from './Components/About';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';


export default function Home() {
  return (
    <>
      {/* Masthead */}
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Welcome To Our Studio!</div>
          <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
          <Link className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</Link>
        </div>
      </header>

      {/* Services Section */}
      <Services />

      {/* Portfolio Section */}
      <section className="page-section bg-light" id="portfolio">
        <Portfolio />
        {/* Your portfolio content here */}
      </section>

      {/* About Section */}
      <About />

      {/* Team Section */}
      <Team />

      {/* Contact Section */}
      <Contact />
    </>
  );
}
