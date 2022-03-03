import React from 'react';
import Pharmacy from "./Pharmacy"

function List({pharmacies,lang}) {

  return <>
      {
       
        pharmacies.map((pharmacy,id) => <Pharmacy lang={lang} key={id} {...pharmacy} />  )
      }
  </>;
}

export default List;
