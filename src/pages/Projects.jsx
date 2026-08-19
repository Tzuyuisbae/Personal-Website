import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main title="Projects">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/projects">
              <h2 data-testid="heading"> Projects </h2>
            </Link>
          </h2>
          <div className="fancyText">
            <h3>
              A selection of projects that I created during my spare time/in class
            </h3>
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

export default Projects;
