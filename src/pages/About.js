import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/about.md');

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

class About extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 50);
  }

  render() {
    return (
      <Main title="About">
        <article className="post" id="about">
          <header>
            <div className="title">
              <h2>
                <Link to="/about">
                  <h2 data-testid="heading" show={this.state.show}>About Me</h2>
                </Link>
              </h2>
              {/* <p>(in about {count} words)</p> */}
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
  }
}

export default About;
