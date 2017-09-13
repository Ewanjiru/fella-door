import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Controls extends React.Component{
    render(){
        return(
               <div className="button_wrapper">
                    
                <FloatingActionButton label="Next" primary={true} onClick={()=>{fetch("http://127.0.0.1:8080/switch")}}/>
                <FloatingActionButton label="End" secondary={true} />
            
              </div>
            )
    }
}

export default Controls;