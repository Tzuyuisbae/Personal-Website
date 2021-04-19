import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import ReactRevealText from 'react-reveal-text';
import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';

class Stats extends React.Component{

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
      <Helmet title="Stats" />
      <article className="post" id="stats">
        <header>
          <div className="title">
            <h2><Link to="/stats">
              <ReactRevealText show={this.state.show}>Stats</ReactRevealText> </Link>
            </h2>
          </div>
        </header>
        <Personal />
        <Site />
        </article>
      </Main>
    );
  }

}

export default Stats;
