import React from 'react';
import { connect } from 'react-redux';

import { fetchStream } from '../../../actions';
import classes from './StreamShow.module.css';

class StreamShow extends React.Component {
  componentDidMount() {
    const { fetchStream, match } = this.props;
    fetchStream(match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;
    return (
      <div className={classes.stream__container}>
        <div className={classes.stream__video} />
        <div className={classes.stream__details}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ streams }, { match }) => ({
  stream: streams[match.params.id]
});

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow);
