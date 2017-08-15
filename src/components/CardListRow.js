import React from "react";
import Published from './Published';
import ItemTitle from './ItemTitle';

const CardListRow = ({ item }) => {

  function authorUrl(url){
    const end = url.split('').reverse().slice(1).indexOf('/')
    return url.split('').reverse().slice(12).reverse().join('');
  }

  return <div style={{ border: "1px solid lightGrey", display: "flex" }}>
        <div>
          <img style={{ width: 120, height: 120 }} src={item.media.m} />
        </div>

        <div style={{ displayDirection: "column" }}>
      
          <ItemTitle title={item.title}/>

          <div style={{ padding: 10 }}>
            <Published date={item.published}/>

            <span style={{ fontSize: 14, textDecoration: "underline" }}>
              <a href={authorUrl(item.link)}>Photo author</a>
            </span>

            <span style={{ fontSize: 14, paddingLeft: 10, textDecoration: "underline" }}>
              <a href={item.link}>View on Flickr</a>
            </span>
            
          </div>
        </div>
    </div>;
};

export default CardListRow;
