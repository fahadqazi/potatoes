import React from "react";
import truncate from "html-truncate";
import { Link } from "react-router";

const ItemTitle = props => {
  return (
    <span style={{ paddingLeft: 10, fontSize: 20, textOverflow: "ellipsis" }}>
      <Link to="/details">
        {truncate(props.title, 30)}
      </Link>
    </span>
  );
};

export default ItemTitle;
