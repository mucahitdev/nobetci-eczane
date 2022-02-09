import React from "react";
import Select from "react-select";
import ilceler from "./ilce"

function OptionsDistricts({valueCity,setvalueDistricts,valueDistricts}) {
  const customStyles = {
    singleValue: (provided) => {
      const opacity = valueDistricts === "" ? 0 : 1;
      const transition = 'opacity 300ms';
      return { ...provided, opacity, transition };
    }
  }
  
  let selectedDis = ilceler.filter( ilce => ilce.citiesid === valueCity.value )
  return (
    <>
      <Select 
        styles={customStyles}
        placeholder="İlçeyi seç"
        value={selectedDis.label}
        onChange={setvalueDistricts} 
        options={selectedDis} />
    </>
  );
}

export default OptionsDistricts;
