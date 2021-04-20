import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

let width = window.innerWidth;

export default class Resume extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/no-unused-state
    this.state = { width: window.innerWidth, height: window.innerHeight, show: false };
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
    // eslint-disable-next-line react/no-unused-state
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <Main title="Resume">
        <article className="post" id="resume">
          <header>
            <div className="title">
              <h2>
                <Link to="resume">
                  <h2 show={this.state.show}> Resume </h2>
                </Link>
              </h2>
              <iframe title="resume" src="https://drive.google.com/file/d/1rO0qdqVZVt-Xbxtn3Cc260sD_ftXtSqV/preview" width={width / 2} height={document.documentElement.clientWidth / 1.5} />
              <br />
              <a className="button" href="https://drive.google.com/file/d/1rO0qdqVZVt-Xbxtn3Cc260sD_ftXtSqV" target="_blank" rel="noreferrer"> Download </a>
            </div>
          </header>
        </article>
      </Main>
    );
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
