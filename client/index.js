import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import AppRoutes from './Routing';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <MuiThemeProvider>
<AppRoutes />
</MuiThemeProvider>, 
document.getElementById('root'));
