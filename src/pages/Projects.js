import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
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

  render() {
    return (
      <Main title="Projects">
        <article className="post" id="projects">
          <header>
            <div className="title">
              <h2>
                <Link to="/projects">
                  <h2 data-testid="heading" show={this.state.show}> Projects </h2>
                </Link>
              </h2>
              <div className="fancyText">
                <h2 show={this.state.show}>
                  A selection of projects that I created during my spare time/in class
                </h2>
              </div>
            </div>
          </header>
          {data.map((project) => (
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
