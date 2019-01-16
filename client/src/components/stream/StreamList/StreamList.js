import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../../actions';
import { Link } from 'react-router-dom';

import classes from './streamList.module.css';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList = ({ streams }) =>
    streams.map(({ id, title, description, userId }) => {
      return (
        <li key={id}>
          <Link className={classes.item} to={`/stream/${id}`}>
            <h3>{title}</h3>
            <p>{description}</p>
          </Link>
          {this.showOwnStreamButtons(userId, id)}
        </li>
      );
    });

  showOwnStreamButtons = (userId, id) => {
    if (userId === this.props.userId) {
      return (
        <div className={classes.button__container}>
          <Link to={`/stream/edit/${id}`} className={classes.editButton}>
            Edit
          </Link>
          <Link to={`/stream/delete/${id}`} className={classes.deleteButton}>
            Delete
          </Link>
        </div>
      );
    }
    return null;
  };

  showCreateStreamLink = () => {
    if (this.props.isSignedIn) {
      return (
        <Link className={classes.createStream} to="/stream/new">
          Create Stream
        </Link>
      );
    }
  };

  render() {
    return (
      <div className={classes.stream__list}>
        <ul>{this.renderList(this.props)}</ul>
        {this.showCreateStreamLink()}
      </div>
    );
  }
}

const mapStateToProps = ({ streams, auth }) => ({
  streams: Object.values(streams),
  userId: auth.userId,
  isSignedIn: auth.isSignedIn
});

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
