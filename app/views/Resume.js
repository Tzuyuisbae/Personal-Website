import React, {Component} from 'react';
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

var width;

export default class Resume extends Component{
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
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
            <h2><Link to="resume">Resume</Link></h2>
            <iframe src="https://drive.google.com/file/d/1X036l3H9Ye-gd1TxsKf9TcUv5tzfnajP/preview" width={width/2} height={document.documentElement.clientWidth/1.5}></iframe>        
            <br/>
            <button className="button" href="https://drive.google.com/open?id=1X036l3H9Ye-gd1TxsKf9TcUv5tzfnajP" target = "_blank"> Download </button>
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
