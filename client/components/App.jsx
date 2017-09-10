import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ParentComponet from './parentComponet.jsx';
import '../css/style.scss';

export default class App extends React.Component {
  render() {
    const style = {
      height: 100,
      font: 'Georgia',
    };
    return (
      <div>
        <MuiThemeProvider>
          <AppBar
            title="FellaDoor"
            showMenuIconButton={false}
            style={style}
          />
        </MuiThemeProvider>
        <ParentComponet />
      </div>);
  }
}
