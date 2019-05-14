import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Helmet>
          <title>Hello from Electron</title>
        </Helmet>
        Hello from Electron
      </div>
    );
  }
}

export default App;
