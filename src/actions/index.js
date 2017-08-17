import axios from 'axios';
import $ from 'jquery';

export const FETCH_DATA = 'FETCH_DATA';   

const ROOT_URL = "https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&format=json&tagmode=all&jsoncallback=?";

export function fetchData(){

    var request = fetch(ROOT_URL, {mode: 'no-cors'}).then((response) => {
      console.log('resposne: ', response);
     });


    return {
        type: FETCH_DATA,
        payload: request
    }
}
