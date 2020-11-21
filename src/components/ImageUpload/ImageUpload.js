import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';

class ImageUpload extends Component {
  handleFinishedUpload = (info) => {
    this.props.dispatch({
      type: 'POST_IMAGE_URL',
      payload: info.fileUrl,
    });
  };

  render() {
    const uploadOptions = {};
    // S3 bucket URL is set in the .env file
    const s3Url = process.env.REACT_APP_S3_URL;
    const innerDropElement = (
      <div>
        <p>Click or Drop File Here</p>
      </div>
    );
    return (
      ///this code comes from https://github.com/founderlab/react-dropzone-s3-uploader
      <DropzoneS3Uploader
        onFinish={this.handleFinishedUpload}
        s3Url={s3Url}
        maxSize={1024 * 1024 * 5}
        upload={uploadOptions}
      />
    );
  }
}

export default connect()(ImageUpload);
