import axios from 'axios';
import $ from 'jquery';

export const FETCH_DATA = 'FETCH_DATA';   

const ROOT_URL = "https://api.flickr.com/services/feeds/photos_public.gne?&tagmode=all&jsoncallback=?";

export function fetchData(){
  console.log('1')
    const request = $.getJSON(ROOT_URL, {
      tags: "potato",
      format: "json"
    }).done(response => {
      return response
    });
    console.log('request: ', request);
    return {
        type: FETCH_DATA,
        payload: request
    }
}
