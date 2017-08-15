import React from "react";
import truncate from 'html-truncate';
import Published from './Published';

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
        <span style={{ paddingLeft: 10, fontSize: 20, textOverflow: "ellipsis" }}>
          <a href="">
            {truncate(item.title, 30)}
          </a>
        </span>

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
