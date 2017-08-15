import React, { Component } from "react";
import CardList from './CardList';
import $ from 'jquery';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: []
    }
  }

  componentDidMount() {
    var url="https://api.flickr.com/services/feeds/photos_public.gne?&tagmode=all&jsoncallback=?";
    
    $.getJSON(url,{
      tags: 'potato', 
      format: 'json',
    }).done(response => {
      this.setState({
        item: response.items
      })
    })
  }

  render() {
    return (
      <div>
        <CardList data={this.state.item}/>
      </div>
    );
  }
}
