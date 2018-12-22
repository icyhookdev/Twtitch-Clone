import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import StreamCreate from '../stream/StreamCreate/StreamCreate';
import StreamDelete from '../stream/StreamDelete/StreamDelete';
import StreamEdit from '../stream/StreamEdit/StreamEdit';
import StreamList from '../stream/StreamList/StreamList';
import StreamShow from '../stream/StreamShow/StreamShow';
import Header from '../Header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/stream/new" component={StreamCreate} />
          <Route path="/stream/edit" component={StreamEdit} />
          <Route path="/stream/delete" component={StreamDelete} />
          <Route path="/stream/show" component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
