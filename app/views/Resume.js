import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';


const Resume = () => (
  <Main>
    <Helmet title="Resume" />
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="resume">Resume</Link></h2>
          <iframe src="https://drive.google.com/file/d/1X036l3H9Ye-gd1TxsKf9TcUv5tzfnajP/preview" width="85%" height="950"></iframe>        
          <br/>
          <a href="https://drive.google.com/open?id=1X036l3H9Ye-gd1TxsKf9TcUv5tzfnajP" target = "_blank"> Download </a>
          </div>
      </header>
    

    </article>
  </Main>
);

export default Resume;
