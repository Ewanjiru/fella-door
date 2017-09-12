import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ParentComponet from './parentComponet.jsx';
import { blueGrey800, blueA700 } from 'material-ui/styles/colors';
import '../css/style.scss';

const muiTheme = getMuiTheme({
  palette: {
    textColor: blueGrey800,
    primary1Color: blueA700,
  },
  appBar: {
    height: 50,
  },
});

export default class App extends React.Component {
  render() {
    const style = {
      font: 'Georgia',
    };
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <AppBar
            title="Felladoor"
            titleStyle={{ marginLeft: 52 + '%' }}
            showMenuIconButton={false}
            style={style}
          />
        </MuiThemeProvider>
        <ParentComponet />
      </div>);
  }
}
