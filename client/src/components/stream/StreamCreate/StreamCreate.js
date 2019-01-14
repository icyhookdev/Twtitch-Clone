import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { createStream } from '../../../actions/';
import StreamForm from '../../StreamForm/StreamForm';

class StreamCreate extends React.Component {
  onSubmit = formValue => {
    this.props.createStream(formValue);
  };

  render() {
    return (
      <Fragment>
        <StreamForm onSubmit={this.onSubmit} title="Create a Stream" />
      </Fragment>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
