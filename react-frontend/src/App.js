import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListStockComponent from './components/ListStockComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateStockComponent from './components/CreateStockComponent';
import CreateUserComponent from './components/CreateUserComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent/>
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListStockComponent}></Route>
                          <Route path = "/stock" component = {ListStockComponent}></Route>
                          <Route path = "/add-stock/:id" component = {CreateStockComponent}></Route>
                          <Route path = "/user/:id" component ={CreateUserComponent}></Route>
                          <Route component={Error} />
                          {/* <Route path = "/update-stock/:id" component = {UpdateStockComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
