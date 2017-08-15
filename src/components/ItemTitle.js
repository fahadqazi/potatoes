import React from 'react';
import truncate from 'html-truncate';


const ItemTitle = (props) => {
  return(
    <span style={{ paddingLeft: 10, fontSize: 20, textOverflow: "ellipsis" }}>
      <a href="">
        {truncate(props.title, 30)}
      </a>
    </span>
  );
}

export default ItemTitle;