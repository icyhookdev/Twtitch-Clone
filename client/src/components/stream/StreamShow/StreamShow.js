import React from 'react';
import { connect } from 'react-redux';
import flv from 'flv.js';

import { fetchStream } from '../../../actions';
import classes from './StreamShow.module.css';

class StreamShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { fetchStream, match } = this.props;
    fetchStream(match.params.id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  buildPlayer = () => {
    if (this.player || !this.props.stream) {
      return;
    }

    const { id } = this.props.match.params;

    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;
    return (
      <div className={classes.stream__container}>
        <div className={classes.stream__video}>
          <video ref={this.videoRef} style={{ width: '100%' }} controls />
        </div>
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
