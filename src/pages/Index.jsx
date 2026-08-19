import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">
              <h2 data-testid="heading">
                About this site
              </h2>
            </Link>
          </h2>
          <div className="fancyText">
            <h2>
              My Personal Website built with React
            </h2>
          </div>

        </div>
      </header>

      <div className="fancyText">
        Welcome to my website. Please feel free to read more
        <Link to="/about"> about me</Link>, or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </div>
      <p> Website template forked from <a href="https://github.com/mldangelo/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
