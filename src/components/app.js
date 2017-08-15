import React, { Component } from "react";
import CardList from './CardList';
import $ from 'jquery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../actions/index';
import { Link } from 'react-router';


class App extends Component {
 
  
  componentWillMount(){
    console.log('3')
    this.props.fetchData();
  }

  render() {

    console.log('2', this.props.item);
    return (
      <div>
        <CardList data={this.props.item}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    item: state.item
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData: fetchData}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
