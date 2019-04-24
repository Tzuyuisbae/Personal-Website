import React from 'react';
import { Link } from 'react-router-dom';
import ReactRevealText from 'react-reveal-text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SplitText from 'react-pose-text';

import data from '../../data/contact';

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30
  }
};

class Nav extends React.Component {

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
      <section id="sidebar">
      <section id="intro">
        <Link to="/" className="logo">
          <img src={`${BASE_PATH}/images/me_icon.png`} alt="" />
        </Link>
        <header>
          <h2>
          <ReactRevealText show={this.state.show}>
              Joe Liu

            </ReactRevealText>
          </h2>
          <div className="fancyText"> 
            <a href="mailto:liujoe99@hotmail.ca">
            <ReactRevealText show={this.state.show}>

              liujoe99@hotmail.ca
            </ReactRevealText>
            </a>
          </div>
        </header>
      </section>

      <section className="blurb">
        <h2>
        <ReactRevealText show={this.state.show}>
          About
        </ReactRevealText>
        </h2>
        <div className="fancyText">
          <ReactRevealText show={this.state.show}>2nd Year Computer Science student at UTSC </ReactRevealText>
          <ReactRevealText show={this.state.show}>Full Stack Developer for UTSC </ReactRevealText>
          <ReactRevealText show={this.state.show}>TA for Introduction to Computer Science II (CSCA48) at UTSC</ReactRevealText>
        </div>
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
  
  }
}

export default Nav;
