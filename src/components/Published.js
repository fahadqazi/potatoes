import React from 'react';

const Published = (props) => {
  const date = props.date;
  const dateHere = new Date(date);

  function dateOrdinal(d) {
    return d+(31==d||21==d||1==d?"st":22==d||2==d?"nd":23==d||3==d?"rd":"th")
  };

  function monthName(monthNumber){
    const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    return months[monthNumber-1]
  }

  function dateFormatter(dateInput){
    const date = dateInput.getDate();
    const month = dateInput.getMonth();
    const year = dateInput.getFullYear();
    const hours = dateInput.getHours();
    const minutes = dateInput.getMinutes();

    return (`${dateOrdinal(date)} ${monthName(month)} ${year} at ${hours}:${minutes}`);
  }

  return(
    <p style={{ fontSize: 14 }}>
      Published: {dateFormatter(dateHere)}
    </p>
  );
}

export default Published;