import React from 'react';

const ViewFlickr = (props) => {
  return(
    <span style={{ fontSize: 14, paddingLeft: 10, textDecoration: "underline" }}>
      <a href={props.link}>View on Flickr</a>
    </span>
  );
}

export default ViewFlickr;