import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListAdminComponent from './components/ListAdminComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FootComponent';
import CreateAdminComponent from './components/CreateAdminComponents';
import UpdateAdminComponent from './components/UpdateAdminComponent';
import ViewAdminComponent from './components/ViewAdminComponent';
// import ListEmployeeComponent from './components/ListEmployeeComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListAdminComponent}></Route>
                          <Route path = "/admin" component = {ListAdminComponent}></Route>
                          <Route path = "/add-admin/:id" component = {CreateAdminComponent}></Route>
                          <Route path = "/view-admin/:id" component = {ViewAdminComponent}></Route>
                          <Route path = "/update-admin/:id" component = {UpdateAdminComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
