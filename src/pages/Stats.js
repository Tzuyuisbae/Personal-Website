import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';

class Stats extends React.Component {
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
      <Main title="Stats">
        <article className="post" id="stats">
          <header>
            <div className="title">
              <h2>
                <Link to="/stats">
                  <h2 data-testid="heading" show={this.state.show}>Stats</h2>
                </Link>
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
