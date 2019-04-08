import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.png`} alt="" />
      </Link>
      <header>
        <h2>Joe Liu</h2>
        <p><a href="mailto:liujoe99@hotmail.ca">liujoe99@hotmail.ca</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>2nd Year Computer Science student at UTSC <br/> 
        Full Stack Developer for UTSC <br/>
        TA for Introduction to Computer Science II (CSCA48) at UTSC

      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
        ))}
      </ul>
    </section>
  </section>
);

export default Nav;
