import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ReactRevealText from 'react-reveal-text';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

class Projects extends React.Component {
  
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
      <Helmet title="Projects" />
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2><Link to="/projects">
            <ReactRevealText show={this.state.show}> Projects </ReactRevealText>
            </Link></h2>
            <div className="fancyText">
              <ReactRevealText show={this.state.show}>A selection of projects that I created during my spare time/in class </ReactRevealText>
            </div>
          </div>
        </header>
        {data.map(project => (
          <Cell
            data={project}
            key={project.title}
          />
        ))}
      </article>
      </Main>
    );
  }
}

export default Projects;
