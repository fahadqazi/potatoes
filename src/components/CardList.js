import React from 'react';
import CardListRow from './CardListRow';
import CourseListRow from './CardListRow';

const CardList = ({data}) => {
  console.log(data);
  return(
    <ul style={{listStyleType:'none'}}>
    {data.map((item, index) =>
      <CourseListRow key={index} item={item}/>
    )}
    </ul>
  )
}

export default CardList;