import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me_icon.png`} alt="" />
      </Link>
      <header>
        <h2>Joe Liu</h2>
        <p><a href="mailto:liujoe99@hotmail.ca">liujoe99@hotmail.ca</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        4th Year Computer Science student at UTSC.<br />
        Software Development Engineer for Amazon (starting Fall 2022) <br />
        TA for Introduction to Computer Science I (CSCA08) at UTSC <br />
        Former Software Developer for Caseware International.<br />
        Former Full Stack Developer for UTSC.<br />
        Former TA for Introduction to Computer Science II (CSCA48) at UTSC (Winter 2019).
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
