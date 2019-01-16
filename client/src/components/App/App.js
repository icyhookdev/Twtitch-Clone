import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from '../stream/StreamCreate/StreamCreate';
import StreamDelete from '../stream/StreamDelete/StreamDelete';
import StreamEdit from '../stream/StreamEdit/StreamEdit';
import StreamList from '../stream/StreamList/StreamList';
import StreamShow from '../stream/StreamShow/StreamShow';
import Header from '../Header/Header';
import history from '../../history';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/stream/new" component={StreamCreate} />
            <Route path="/stream/edit/:id" component={StreamEdit} />
            <Route path="/stream/delete/:id" component={StreamDelete} />
            <Route path="/stream/:id" component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
