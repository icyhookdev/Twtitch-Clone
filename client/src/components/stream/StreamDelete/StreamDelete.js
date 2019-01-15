import React from 'react';
import { connect } from 'react-redux';

import { fetchStream, deleteStream } from '../../../actions';
import Modal from '../../Modal/Modal';
import history from '../../../history';

class StreamDelete extends React.Component {
  componentDidMount() {
    const { fetchStream, match } = this.props;
    fetchStream(match.params.id);
  }

  renderTitle = () => {
    if (!this.props.stream) {
      return null;
    }

    return (
      <p>
        Are you sure you want to delete
        <strong> {this.props.stream.title} </strong>
        the stream?
      </p>
    );
  };

  deleteStreamHandler = () => {
    const { deleteStream, match } = this.props;
    deleteStream(match.params.id);
  };

  render() {
    return (
      <React.Fragment>
        <Modal
          title="Delete Stream"
          actionButton="Delete"
          onDismiss={() => history.push('/')}
          onNext={this.deleteStreamHandler}
        >
          {this.renderTitle()}
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ streams }, { match }) => ({
  stream: streams[match.params.id]
});

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
