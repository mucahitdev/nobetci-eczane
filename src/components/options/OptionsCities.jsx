import React from "react";
import Select from "react-select";
import iller from "./il"

function OptionsCities({setValueCity,valueCity,setvalueDistricts}) {

    const handleChange = (e) => {
        setvalueDistricts("");
        setValueCity(e);
    }

  return (
    < >
      <Select 
        className="w-100"
        placeholder="İli seç" 
        value={valueCity} 
        onChange={handleChange} 
        options={iller} 
        getOptionLabel={(option) => option.value + " " + option.label}
        />
        
    </>
  );
}

export default OptionsCities;


