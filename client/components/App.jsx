import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ParentComponet from './parentComponet.jsx';
import '../css/style.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        </MuiThemeProvider>
        <ParentComponet />
      </div>);
  }
}
