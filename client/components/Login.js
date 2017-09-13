import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { hashHistory } from "react-router";
import { Card, CardTitle } from 'material-ui/Card';
import { blueA200} from 'material-ui/styles/colors';
import GoogleLogin from 'react-google-login';

const style = {
    marginLeft: 30 + '%',
    marginTop: 10 + '%',
    width: 36 + '%',
    height: 120,
    color: 'white',
    backgroundColor: "rgba(41, 98, 255, 0.5)",   
};

const responseGoogle = (response) => {
    console.log(response);
    window.sessionStorage.user = response.w3.ig;
    let email = response.profileObj.email;
    if (email.endsWith('andela.com')) {
        console.log(email);
        window.location.replace('/#/videocall');
    } else {
        window.location.replace('/#/unauthorized');
    }
}
class Login extends Component {
    render() {
        return (
            <div className="Login">
            <div className="navi">
            <img id="logo" src="https://pbs.twimg.com/profile_images/647544968777756672/-Ms_S6bh.png" />
            <h3>Felladoor</h3>
                </div>
                <Card style={style}>
                    <h3 className="sign-in">Sign In With Google</h3>
                    <GoogleLogin
                        className="g-signin2"
                        clientId="1057566456731-upgq1plef7m7va2sc9ssigsvc1bqhbft.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                    />
                </Card>

            </div>
        );
    }
}

export default Login;