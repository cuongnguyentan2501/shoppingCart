import React from 'react';
import './main.css';
import Header from './components/Header';
import ListProducts from './components/ListProducts';
import Cart from './components/Cart';
import 'react-notifications/lib/notifications.css';
import {connect} from 'react-redux';
import {NotificationContainer} from 'react-notifications';
import Loading from './components/Loading'
function App({isLoading}) {
  return (
    <div id="app">
      {isLoading?<Loading/>:""}
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
const mapStateToProps = state => ({
  isLoading:state.cart.isLoading,
});
export default connect(mapStateToProps)(App);
