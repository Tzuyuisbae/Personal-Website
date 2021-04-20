import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

let width = window.innerWidth;

export default class MemeResume extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/no-unused-state
    this.state = { width: 0, height: 0, show: false };
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
                  <h2 show={this.state.show}> BF Resume </h2>
                </Link>
              </h2>
              <iframe title="resume" src="https://drive.google.com/file/d/1_QwfIqUKxwoBlf8Z17mrZELqTsRqGm16/preview" width={width / 2} height={document.documentElement.clientWidth / 1.5} />
              <br />
              <a className="button" rel="noreferrer" href="https://drive.google.com/file/d/1_QwfIqUKxwoBlf8Z17mrZELqTsRqGm16" target="_blank"> Download </a>
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
