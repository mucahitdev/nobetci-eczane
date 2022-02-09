import React from 'react';
import Pharmacy from "./Pharmacy"

function List({pharmacies}) {
  return <>
      {
        pharmacies.map((pharmacy,id) => <Pharmacy key={id} {...pharmacy} />  )
      }
  </>;
}

export default List;
