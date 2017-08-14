import React from "react";

const CardListRow = ({ item }) => {
  const dated = item.published
  var dateHere = new Date(dated)

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

  function authorUrl(url){
    const end = url.split('').reverse().slice(1).indexOf('/')
    return url.split('').reverse().slice(12).reverse().join('');
  }

  return (
    <div style={{border:'1px solid lightGrey', display:'flex'}}>

        <div>
          <img
            style={{ width: 120, height: 120}}
            src={item.media.m}
          />
        </div>

        <div style={{displayDirection:'column'}}>
          <span style={{paddingLeft: 10, fontSize: 20}}><a href="">{item.title}</a></span>

          <div style={{padding: 10}}>

            <p style={{fontSize: 14}}>Published: {dateFormatter(dateHere)}</p>

            <span style={{fontSize: 14, textDecoration: 'underline'}}><a href={authorUrl(item.link)}>Photo author</a></span>

            <span style={{fontSize: 14, paddingLeft:10, textDecoration: 'underline'}}><a href={item.link}>View on Flickr</a></span>

          </div>
        </div>
        
    </div>
  );
};

export default CardListRow;
