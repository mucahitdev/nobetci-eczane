import { useState, useEffect } from "react";
import "./App.css";
import OptionsCities from "./components/options/OptionsCities";
import OptionsDistricts from "./components/options/OptionsDistricts";

import List from "./components/List";
import Search from "./components/Search";

function App() {
  const [valueCity, setValueCity] = useState("");
  const [valueDistricts, setvalueDistricts] = useState("");
  const [validationShow, setValidationShow] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (valueCity.label !== undefined) {
      setValidationShow(false);
    }
  }, [valueCity]);

  console.log(result);

  return (
    <div className="App container mt-3">
      <div className="row  justify-content-center me-auto ms-auto ">
        <div className="col-12  mb-3">
          <OptionsCities
            valueCity={valueCity}
            setValueCity={setValueCity}
            setvalueDistricts={setvalueDistricts}
          />
          {validationShow && (
            <div className="pt-2 text-white ">İl seçmek zorunludur</div>
          )}
        </div>

        <div className="col-12   mb-3">
          <OptionsDistricts
            valueCity={valueCity}
            setvalueDistricts={setvalueDistricts}
            valueDistricts={valueDistricts}
          />
        </div>

        <Search
          valueCity={valueCity}
          setResult={setResult}
          setValidationShow={setValidationShow}
          valueDistricts={valueDistricts}
        />
      </div>
      <div className="row mt-5 justify-content-around ">
        <List pharmacies={result} />
      </div>
    </div>
  );
}

export default App;
