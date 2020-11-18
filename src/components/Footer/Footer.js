import React, { Component } from 'react';
import { connect } from 'react-redux';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import mapStoreToProps from '../../redux/mapStoreToProps';
import "./Footer.css"
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CreditCardIcon from '@material-ui/icons/CreditCard';



class Footer extends Component {
  
  facebook = ()=>{
    window.open('https://www.facebook.com/drawbyyou','_blank');
  }

  mail = () =>{
    window.open('mailto:steve@drawbyyou.com','_blank');
  }

  instagram = () =>{
    window.open('https://www.instagram.com/draw_by_you/','_blank');
  }

  donate = () =>{
    window.open('https://www.givemn.org/story/Draw','_blank');
  }

  render() {
    return (
      <BottomNavigation id="footer-container">
            <BottomNavigationAction id="bottom-nav" icon={<FacebookIcon id="footer-icon"/>} label="Facebook" onClick={this.facebook}></BottomNavigationAction>
            <BottomNavigationAction id="bottom-nav" icon={<MailIcon id="footer-icon"/>} label="Mail"  nClick={this.mail}></BottomNavigationAction>
            <BottomNavigationAction id="bottom-nav" icon={<InstagramIcon id="footer-icon"/>} label="Instagram" onClick={this.instagram}></BottomNavigationAction>
            <BottomNavigationAction id="bottom-nav" icon={<CreditCardIcon id="footer-icon"/>} label="Donate" onClick={this.donate}></BottomNavigationAction>
      </BottomNavigation>
    );
  }
}

export default connect(mapStoreToProps)(Footer);
