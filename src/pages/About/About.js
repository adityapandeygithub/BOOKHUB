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
            <p className='fs-17'>A book hub website could be a platform that provides a centralized location for book lovers to find, read, review, and discuss books. It may offer features such as book recommendations, author interviews, book reviews, forums for discussions, book clubs, and possibly even a marketplace for buying and selling books. </p>
            <p className='fs-17'>The exact features and purpose of the website would depend on the goals and priorities of its creators.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

