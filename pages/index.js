import React from "react";
import Head from "next/head";
import Navbar from "./Components/Navbar";
import ReactLenis from "lenis/react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Gallery from "./Components/Galllery";
import Destination from "./Components/Destination";
import Contact from "./Components/Contact";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";

const Index = () => {
  return (
    <>
      <Head>
        <title>Hotel Prem Chaya Inn - Luxury Stay Near Mahakaleshwar Temple & Chamunda Mata Mandir, Ujjain</title>
        <meta name="description" content="Experience divine hospitality at Hotel Prem Chaya Inn, perfectly located near both Mahakaleshwar Temple and Chamunda Mata Mandir in Ujjain. Enjoy comfortable accommodations with modern amenities and traditional charm for a peaceful spiritual stay." />
        <meta name="keywords" content="Hotel Prem Chaya Inn, hotels near Mahakaleshwar temple, hotels near Chamunda Mata Mandir, Ujjain hotels, luxury hotel Ujjain, best hotel in Ujjain, spiritual stay Ujjain" />
        <meta property="og:title" content="Hotel Prem Chaya Inn - Premium Hotel Near Mahakaleshwar Temple & Chamunda Mata Mandir" />
        <meta property="og:description" content="Your ideal accommodation in Ujjain, situated close to both Mahakaleshwar Temple and Chamunda Mata Mandir. Perfect for pilgrims seeking comfort and convenience." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Head>
      <ReactLenis root>
        <Navbar />
        <div className="overflow-x-hidden overflow-y-hidden">
          <Hero />

          <div id="about">
            <About />
          </div>

          <div id="gallery">
            <Gallery />
          </div>

          <div id="destinations">
         
           
              <Destination />
          
          </div>

          <div id="testimonials">
            <Testimonial />
          </div>
          <div id="contact">
            <Contact />
          </div>

          <Footer />
        </div>
      </ReactLenis>
    </>
  );
};

export default Index;
