import React, { Component } from 'react';
import { Helmet as Head } from 'react-helmet';
import { connect } from 'react-redux';

class Home extends Component {
  state = {
    showText: false
  };

  onHit = () => this.setState({ showText: !this.state.showText });

  render() {
    return (
      <div className="div">
        <Head>
          <meta name="description" content="Free Web tutorials" />
          <title>Home page</title>
        </Head>
        <h1>Some of my tutorial another sdfsdf</h1>
        <p>{this.props.message} </p>
        {this.state.showText && (
          <h1>Hurry we are going to learn something new</h1>
        )}
        <button onClick={this.onHit}>Hit me</button>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return { message: store.meta.message };
};
export default connect(mapStateToProps)(Home);
