import React from 'react';
import './main.css';
import Header from './components/Header';
import ListProducts from './components/ListProducts';
import Cart from './components/Cart';
import 'react-notifications/lib/notifications.css';
import {connect} from 'react-redux';
import {NotificationContainer} from 'react-notifications';

function App() {
  return (
    <div id="app">
       <NotificationContainer/>
        <div className="container">
          <Header/>
          <div className="row">
            <ListProducts/>
            <Cart/>
          </div>
        </div>
      </div>
  );
}

export default connect()(App);
