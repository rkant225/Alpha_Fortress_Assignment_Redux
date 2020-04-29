import React from 'react';
import './App.css';
import Header from './Header/Header';
import SelectedMembers from './Menbers/SelectedMembers';
import TotalMembers from './Menbers/TotalMembers';
import * as Actions from '../Redux/Actions';

import {connect} from 'react-redux';

class App extends React.Component {

  componentDidMount(){
    this.props.fetchData();  // call action creator to fetch data
  }

  render(){
    return (
      <div className="container">
        <Header />
        <div className="main">
          <div className="left">
            <TotalMembers/>
          </div>
          <div className="right">
            <SelectedMembers />
          </div>
        </div>
      </div>
    );
  }  
}

export default connect(null,{fetchData : Actions.fetchData})(App);