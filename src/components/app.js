import React, { Component } from "react";
import CardList from './CardList';
import $ from 'jquery';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: []
    }
  }
  componentWillMount(){
    var data = $.ajax({
      url: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=?',
      dataType: 'jsonp'
    });

    data.then(response => {
      console.log(response);
      this.setState({
        items: response
      })
    });
  }

  render() {
    console.log('state: ', this.state.items);
    this.state.items.items.map(function(i){
      console.log(i);
    })
    return (
      <div>
        <CardList data={this.state.items}/>
      </div>
    );
  }
}
