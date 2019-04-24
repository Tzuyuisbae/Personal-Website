import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactRevealText from 'react-reveal-text';

import Main from '../layouts/Main';

import data from '../data/contact';

class Contact extends React.Component {

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
    return (
      <Main>
        <Helmet title="Contact" />
        <article className="post" id="contact">
          <header>
            <div className="title">
              <h2><Link to="/contact">
              <ReactRevealText show={this.state.show}>Contact</ReactRevealText></Link></h2>
            </div>
          </header>
          <div className="email-at">
            <div className="fancytText">
              <ReactRevealText show={this.state.show}> Feel free to get in touch. You can email me at: </ReactRevealText>
            </div>
              <a href={`mailto:liujoe99@hotmail.ca`}>
                <ReactRevealText show={this.state.show}>liujoe99@hotmail.ca</ReactRevealText>
              </a>
            </div>
          <ul className="icons">
            {data.map(s => (
              <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
            ))}
          </ul>
        </article>
      </Main>
    );
  }
}

export default Contact;
