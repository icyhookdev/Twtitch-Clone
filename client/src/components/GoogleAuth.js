import React from 'react';

class GoogleAuth extends React.Component {
  state = {
    isSignedIn: null,
    profileImg: null
  };

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
          this.setState({
            isSignedIn: this.auth.isSignedIn.get()
          });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({
      isSignedIn: this.auth.isSignedIn.get(),
      profileImg: this.auth.currentUser
        .get()
        .getBasicProfile()
        .getImageUrl()
    });
  };

  onLogIn = () => {
    this.auth.signIn();
  };

  onLogOut = () => {
    this.auth.signOut();
  };

  renderAuthButton = () => {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <div className="google__auth_container">
          <img
            className="profile__img"
            src={this.state.profileImg}
            alt="fail to load"
          />
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

export default GoogleAuth;
