import React from 'react';
import { connect } from 'react-redux';

import { fetchStream } from '../../../actions';

class StreamEdit extends React.Component {
  componentDidMount() {
    const { fetchStream, match } = this.props;
    fetchStream(match.params.id);
  }

  renderStreamInfo = () => {
    if (!this.props.streams) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h1>{this.props.streams.title}</h1>
        <p>{this.props.streams.description}</p>
      </div>
    );
  };

  render() {
    return <div> {this.renderStreamInfo()}</div>;
  }
}

const mapStateToProps = ({ streams }) => ({ streams });

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamEdit);
