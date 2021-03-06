import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Button from '@material-ui/core/Button';
import "./RegisterForm.css"
import { TextField} from '@material-ui/core';

class RegisterForm extends Component {
  
        //updates state to make sure username and password are latest state
          componentDidUpdate(prevProps, prevState){
            if (this.state.username !== prevState.username || this.state.password !== prevState.password ){
                  this.setState({
                          username: this.state.username,
                          password: this.state.password,
                  })
            }
        }
        
  state = {
    username: '',
    password: ''
  };

              registerUser = (event) => {
                        event.preventDefault();

                        this.props.dispatch({
                          type: 'REGISTER',
                          payload: {
                            username: this.state.username,
                            password: this.state.password,
                          },
                        });
                      }; // end registerUser

              handleInputChangeFor = (propertyName) => (event) => {
                        this.setState({
                          [propertyName]: event.target.value,
                        });
              };

  render() {
    return (
      <div id="register-div">
        <h1 id="register-h1">Register User</h1>
                {/* Registration Error Appears if there is an error */}
                  {this.props.store.errors.registrationMessage && (
                      <p className="alert" role="alert">
                            {this.props.store.errors.registrationMessage}
                      </p>
                  )}

        <div className="textfield-div">
            <TextField
              type="text"
              name="username"
              variant="filled"
              required={true}
              label="User Name"
              InputLabelProps={{shrink: true}}
              value={this.state.username}
              id="register-textfield"
              onChange={this.handleInputChangeFor('username')}
              fullWidth
              color="primary"
            />
        </div>

        <div className="textfield-div">
            <TextField
              type="password"
              name="password"
              variant="filled"
              required={true}
              label="Password"
              InputLabelProps={{shrink: true}}
              value={this.state.password}
              id="register-textfield"
              onChange={this.handleInputChangeFor('password')}
              fullWidth
              color="primary"
            />
        </div>

          <div className="reg-log-btn-div">
            <Button id="register-btn" onClick={this.registerUser}>Register</Button>
          </div>

      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);