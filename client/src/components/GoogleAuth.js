import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '649260648596-842n3gt5a0dqu2nasc2ekbvrev8vngj5.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }

  render() {
    return <p>Google Auth</p>;
  }
}

export default GoogleAuth;
