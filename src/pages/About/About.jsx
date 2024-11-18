import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Welcome to the Book Library App, your gateway to discovering a world of books! This app lets you effortlessly search for books by title, author, or keyword, providing detailed information, including author names, publication dates, and cover images. Powered by the Open Library API, it offers a diverse collection of books from around the globe.</p>
            <p className='fs-17'>Designed with a responsive and modern interface using React.js the app ensures a smooth and visually appealing experience on any device. Whether you’re a reader searching for your next favorite book or a researcher exploring specific topics, this app is your perfect companion.
            Dive into the Book Library App and embark on your literary journey today!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
