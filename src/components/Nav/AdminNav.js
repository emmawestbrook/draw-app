import React from 'react';
import {HashRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withRouter } from "react-router";

function AdminNav(props) {

          const [anchorEl, setAnchorEl] = React.useState(null);

          const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
          };

          const handleClose = () => {
            setAnchorEl(null);
          };

          const logout = () =>{
              props.dispatch({type:'LOGOUT'})
          }

  console.log("PROPS", props)

            return (
                  <HashRouter>
                            <Paper square id="paper-div" variant="outlined" elevation={3}>
                                  <Tabs id="nav-tab" centered value={false}>
                                          <Tab id="nav-tab-home" className="nav-tab" label="Home" component={Link} to="/home"/>
                                          <Tab id="nav-tab-user" className="nav-tab" label="Participants View" component={Link} to="/userhome"/>
                                          <Tab id="nav-tab-events" className="nav-tab" label="Events" onClick={handleClick}/>
                                                      <Menu anchorEl={anchorEl}
                                                              keepMounted
                                                              open={Boolean(anchorEl)}
                                                              onClose={handleClose}>
                                                          <MenuItem component={Link} to="/events" onClick={handleClose}>Events</MenuItem> 
                                                          <MenuItem component={Link} to="/allrequests" onClick={handleClose}>All Requests</MenuItem>
                                                      </Menu>
                                          <Tab id="nav-tab-drawings" className="nav-tab" label="Drawings" component={Link} to="/drawings" />
                                          <Tab id="nav-tab-logout" className="nav-tab" label="Logout" component={Link} to="/home" onClick={logout}/>
                                  </Tabs>
                              </Paper>
                </HashRouter>
            )
}

export default withRouter(connect(mapStoreToProps)(AdminNav));