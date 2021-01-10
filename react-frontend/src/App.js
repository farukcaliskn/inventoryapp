import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListStockComponent from './components/ListStockComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateStockComponent from './components/CreateStockComponent';
import ViewStockComponent from './components/ViewStockComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListStockComponent}></Route>
                          <Route path = "/stock" component = {ListStockComponent}></Route>
                          <Route path = "/add-stock/:id" component = {CreateStockComponent}></Route>
                          <Route path = "/view-stock/:id" component = {ViewStockComponent}></Route>
                          {/* <Route path = "/update-stock/:id" component = {UpdateStockComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
