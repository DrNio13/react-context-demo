import React, { Component } from 'react';
import ParentComponent from './components/parent';
import ChildComponentWithContext from './components/child';
import Intro from './components/intro';

import ThemeContext, { defaultThemeValue } from './AppContext';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: defaultThemeValue,
      toggleTheme: this.toggleTheme
    }
  }

  toggleTheme = () => {
    this.setState(previousState => ({
      theme: previousState.theme === 'light' ? 'dark' : 'light'
    }))
  }

  render() {
    return (
      <React.Fragment>
        <Intro />

        {/* Parent, Child, GrandChild will be provided with context */}
        <ThemeContext.Provider value={this.state}>
          <ParentComponent>
            <ChildComponentWithContext />
          </ParentComponent>
        </ThemeContext.Provider>

      </React.Fragment>
    );
  }
}

export default App;
