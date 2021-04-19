import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';
import ReactRevealText from 'react-reveal-text';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';

var width = window.innerWidth;

export default class MemeResume extends Component{
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, show: false};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 50);
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    width = window.innerWidth;
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render(){
    return(
      <Main>
      <Helmet title="Resume" />
      <article className="post" id="resume">
        <header>
          <div className="title">
            <h2><Link to="resume">
            <ReactRevealText show={this.state.show}> Meme Resume </ReactRevealText>
            </Link></h2>
            <iframe src="https://drive.google.com/file/d/1_QwfIqUKxwoBlf8Z17mrZELqTsRqGm16/preview" width={width/2} height={document.documentElement.clientWidth/1.5}></iframe>
            <br/>
            <a className="button" href = 'https://drive.google.com/file/d/1_QwfIqUKxwoBlf8Z17mrZELqTsRqGm16' target = "_blank"> Download </a>
            </div>
        </header>


      </article>
    </Main>
    )
  }
}
// const Resume = () => (

//   <Main>
//     <Helmet title="Resume" />
//     <article className="post" id="resume">
//       <header>
//         <div className="title">
//           <h2><Link to="resume">Resume</Link></h2>
//           <iframe src="https://drive.google.com/file/d/1X036l3H9Ye-gd1TxsKf9TcUv5tzfnajP/preview" width={width} height={document.documentElement.clientWidth/1.5}></iframe>
//           <br/>
//           <a href="https://drive.google.com/open?id=1X036l3H9Ye-gd1TxsKf9TcUv5tzfnajP" target = "_blank"> Download </a>
//           </div>
//       </header>


//     </article>
//   </Main>
// );

// export default Resume;
