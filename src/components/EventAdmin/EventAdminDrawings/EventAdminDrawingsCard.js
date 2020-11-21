import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';
import { ImageListItem } from '@material-ui/core';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';


class EventAdminDrawingsCard extends Component {

    //Shows information on click
    infoClick = () => {
        Swal.fire({
            title: `drawing by ${this.props.drawing.name}`,
            text: this.props.drawing.about,
            imageUrl: this.props.drawing.image_url,
            imageAlt: 'drawing',
        });
    }

    //Approves image
    onApprove = () => {
        this.props.dispatch({
            type: 'APPROVE_DRAWING',
            payload: this.props.drawing.id
        });
    }

    //Disapproves image
    onDisapprove = () => {
        this.props.dispatch({
            type: 'DISAPPROVE_DRAWING',
            payload: this.props.drawing.id
        });
    }

    //Sends confirmation dialog when deleting an image
    onDelete = () => {
        Swal.fire({
            title: 'are you sure you want to delete this drawing?',
            text: "you won't be able to undo this action!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#9dac68',
            cancelButtonColor: '#e26d5c',
            confirmButtonText: 'yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.props.dispatch({
                    type: 'DELETE_DRAWING',
                    payload: this.props.drawing.id
                });
                Swal.fire('buh-bye!', '', 'success');
            }
        });
    }

    render() {
        return (
            <div >
                <ImageListItem className="pendingItem" key={this.props.drawing.id}>
                    <img src={this.props.drawing.image_url} alt='drawing' onClick={this.infoClick} />
                    <div className="actionDiv">
                        {this.props.drawing.approved === null ?
                            <div>
                                <Button id="drawings-btn" size="small" color="primary" onClick={this.onDisapprove}>disapprove</Button>
                                <Button id="drawings-btn" size="small" color="primary" onClick={this.onApprove}>Approve</Button>
                            </div> :
                            (this.props.drawing.approved ?
                                <div><Button id="drawings-btn" size="small" color="primary" onClick={this.onDisapprove}>disapprove</Button>
                                    <a href={this.props.drawing.image_url} download> <Button id="drawings-btn" size="small" color="primary">Download</Button> </a></div> :
                                <Button id="drawings-btn" size="small" color="primary" onClick={this.onApprove}>approve</Button>)
                        }
                        <Button id="drawings-btn" size="small" color="primary" onClick={this.onDelete}>Delete</Button>
                    </div>
                </ImageListItem>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(EventAdminDrawingsCard);