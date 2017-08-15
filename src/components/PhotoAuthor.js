import React from 'react';

const PhotoAuthor = (props) => {

  function authorUrl(url){
    const end = url.split('').reverse().slice(1).indexOf('/')
    return url.split('').reverse().slice(12).reverse().join('');
  }

  return(
    <span style={{ fontSize: 14, textDecoration: "underline" }}>
      <a href={authorUrl(props.link)}>Photo author</a>
    </span>
  );
}

export default PhotoAuthor;