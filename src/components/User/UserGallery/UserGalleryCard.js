import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ImageListItem from '@material-ui/core';

class EventAdminDrawingsCard extends Component {

  //When image is clicked, sweet alert is fired with information
  infoClick = () => {
    Swal.fire({
      title: `drawing by ${this.props.drawing.name}`,
      text: this.props.drawing.description,
      imageUrl: this.props.drawing.image_url,
      imageAlt: 'drawing',
    });
  }

  render() {
    return (
      <div>
        <ImageListItem key={this.props.drawing.id}>
          <img src={this.props.drawing.image_url} alt='drawing' />
          <ImageListItemBar id="itembar" position="below"
            title={this.props.drawing.name}
            subtitle={this.props.drawing.description}
            actionIcon={
              //Information about drawing is dispatched on click of information button
              <IconButton
                aria-label={`click for info`}
                onClick={this.infoClick}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      </div >
    );
  }
}

export default connect(mapStoreToProps)(EventAdminDrawingsCard);
