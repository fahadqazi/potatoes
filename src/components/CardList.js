import React from 'react';
import CardListRow from './CardListRow';
import CourseListRow from './CardListRow';

const CardList = ({data}) => {
  console.log(data);
  return(
    <div style={{border:'2px solid goldenRod'}}>
    {data.map((item, index) =>
      <CourseListRow key={index} item={item}/>
    )}
    </div>
  )
}

export default CardList;