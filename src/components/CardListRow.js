import React from "react";

const CardListRow = ({ item }) => {
  return (
    <div>
      <li style={{ height: "100", border: "1px solid lightgrey" }}>
        <img
          style={{ width: 100, height: 100 }}
          src={item.media.m}
        />
        {item.title}
      </li>
    </div>
  );
};

export default CardListRow;
