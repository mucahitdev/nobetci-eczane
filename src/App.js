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
  const [topActive, setTopActive] = useState(true);

  useEffect(() => {
    if (valueCity.label !== undefined) {
      setValidationShow(false);
    }
  }, [valueCity]);

  console.log(result);

  return (
    <div className="App container">
      <div className={`container ${topActive ? "h-100":""}`}>
      <div
        className={`row align-items-center justify-content-center ${topActive ? ' h-100' : ''}`}>
        <div className="col-12 d-flex align-items-center justify-content-center">
          <div className="row w-100 h100px">
            <div className="col-12 col-md-6 col-lg-5 d-flex py-2 flex-column  align-items-center justify-content-start autofocus">
              <OptionsCities
                valueCity={valueCity}
                setValueCity={setValueCity}
                setvalueDistricts={setvalueDistricts}
              />
              {validationShow && (
                <div className="pt-2 text-white ">İl seçmek zorunludur</div>
              )}
            </div>

            <div className="col-12 col-md-6 col-lg-5 py-2 d-flex align-items-start justify-content-center">
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
              setTopActive={setTopActive}
            />
          </div>
        </div>
      </div>
      </div>
      <div className="container mt-5">
      <div className="row justify-content-center">
        <List pharmacies={result} />
      </div>
      </div>
      
    </div>
  );
}

export default App;
