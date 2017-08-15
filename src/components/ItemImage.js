import React from 'react';

const ItemIamge = (props) => {
  return(
    <div>
      <img style={{ width: 120, height: 120 }} src={props.image} />
    </div>
  );
}

export default ItemIamge;