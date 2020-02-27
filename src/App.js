import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListAppComponent from "./component/app/ListAppComponent";
import AddAppComponent from "./component/app/AddAppComponent";
import EditAppComponent from "./component/app/EditAppComponent";

function App() {
  return (
      <div className="container">
          <Router>
              <div className="col-md-6">
                  <h1 className="text-center" style={style}>Mobile apps shop</h1>
                  <Switch>
                      <Route path="/" exact component={ListAppComponent} />
                      <Route path="/app-store" component={ListAppComponent} />
                      <Route path="/add-app" component={AddAppComponent} />
                      <Route path="/edit-app" component={EditAppComponent} />
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;
