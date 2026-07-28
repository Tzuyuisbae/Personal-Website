import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/about.md');

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = () => (
  <Main title="About">
    <article className="post" id="about">
      <header>
        <div className="title">
          <h2>
            <Link to="/about">
              <h2 data-testid="heading">About Me</h2>
            </Link>
          </h2>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default About;
