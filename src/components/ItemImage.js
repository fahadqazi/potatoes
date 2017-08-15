import React from 'react';

const ItemImage = (props) => {
  return(
    <div>
      <img style={{ width: 120, height: 120 }} src={props.image} />
    </div>
  );
}

export default ItemImage;