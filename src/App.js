import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import injectContext from './Store/App.Context.js';
import {Detail} from './Views/Detail.js';
import {Home} from './Views/Home.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/series/:id' component={Detail} />
        <Route render ={ () => <h3>404</h3>   }/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
