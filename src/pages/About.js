import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import ReactRevealText from 'react-reveal-text';
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

  render(){
    return(
      <Main>
      <Helmet title="About" />
      <article className="post" id="about">
        <header>
          <div className="title">
            <h2><Link to="/about">
              <ReactRevealText show={this.state.show}>About Me</ReactRevealText></Link>
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
