import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '649260648596-842n3gt5a0dqu2nasc2ekbvrev8vngj5.apps.googleusercontent.com',
          scope: 'profile email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(
        this.auth.currentUser.get().getId(),
        this.auth.currentUser
          .get()
          .getBasicProfile()
          .getGivenName(),
        this.auth.currentUser
          .get()
          .getBasicProfile()
          .getImageUrl()
      );
    } else {
      this.props.signOut();
    }
  };

  onLogIn = () => {
    this.auth.signIn();
  };

  onLogOut = () => {
    this.auth.signOut();
  };

  renderAuthButton = () => {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <div className="google__auth_container">
          <img src={this.props.userImg} alt="user img" />
          <button className="btn google__logout" onClick={this.onLogOut}>
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <button className="btn google__login" onClick={this.onLogIn}>
          Sign In with Google
        </button>
      );
    }
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    isSignedIn: auth.isSignedIn,
    userName: auth.userName,
    userImg: auth.userImg
  };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
