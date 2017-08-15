import React from "react";
import Published from './Published';
import ItemTitle from './ItemTitle';
import PhotoAuthor from './PhotoAuthor';
import ViewFlickr from './ViewFlickr';
import ItemImage from './ItemImage';

const CardListRow = ({ item }) => {

  return (
    <div style={{ border: "1px solid lightGrey", display: "flex" }}>
        <ItemImage image={item.media.m}/>
        <div style={{ displayDirection: "column" }}>
          <ItemTitle title={item.title}/>
          <div style={{ padding: 10 }}>
            <Published date={item.published}/>
            <PhotoAuthor link={item.link}/>
            <ViewFlickr link={item.link}/>
          </div>
        </div>
    </div>
  );
};

export default CardListRow;
