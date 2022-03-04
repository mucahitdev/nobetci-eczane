import { useState, useEffect } from "react";
import "./App.css";
import OptionsCities from "./components/options/OptionsCities";
import OptionsDistricts from "./components/options/OptionsDistricts";
import { IntlProvider, FormattedMessage } from "react-intl";
import { appLang } from "./components/lang";

import List from "./components/List";
import Search from "./components/Search";

function App() {
  const [valueCity, setValueCity] = useState(""); // Seçilen şehir 
  const [valueDistricts, setvalueDistricts] = useState(""); //Seçilen ilçe
  const [validationShow, setValidationShow] = useState(false); 
  const [result, setResult] = useState([]); // Api den dönen cevab
  const [topActive, setTopActive] = useState(true); // Arama yapıldığında search kısmını yukarı çekmek için
  const [lang, setLang] = useState(localStorage.getItem("lang") || "tr-TR"); // Dil tercihini localde tutmak için

  useEffect(() => {
    if (valueCity.label !== undefined) {
      setValidationShow(false);
    }
  }, [valueCity]);

  const handleChange = (lang) => {
    setLang(lang);
    localStorage.setItem("lang",lang)
  };
  return (
    <div className="App container">
      <div className={topActive === true ? "norm" : "aktif text-center"}>
        {lang === "en-US" ? (
          <button
            className="btn  lang-btn shadow-none"
            onClick={() => handleChange("tr-TR")}
          >
            🇹🇷
          </button>
        ) : (
          <button
            className="btn  lang-btn shadow-none"
            onClick={() => handleChange("en-US")}
          >
            🇬🇧
          </button>
        )}
      </div>
      <div className={`container ${topActive ? "h-100" : ""}`}>
        <div
          className={`row align-items-center justify-content-center ${
            topActive ? " h-100" : ""
          }`}
        >
          <div className="col-12 d-flex align-items-center justify-content-center">
            <div className="row w-100 h100px">
              <div className="col-12 col-md-6 col-lg-5 d-flex py-2 flex-column  align-items-center justify-content-start autofocus">
                <OptionsCities
                  valueCity={valueCity}
                  setValueCity={setValueCity}
                  setvalueDistricts={setvalueDistricts}
                  lang={lang}
                />
                {validationShow && (
                  <IntlProvider locale={lang} messages={appLang[lang]}>
                    <div className="pt-2 text-danger ">
                      <b>
                        <FormattedMessage id="ilzorunlu" />
                      </b>
                    </div>
                  </IntlProvider>
                )}
              </div>

              <div className="col-12 col-md-6 col-lg-5 py-2 d-flex align-items-start justify-content-center">
                <OptionsDistricts
                  valueCity={valueCity}
                  setvalueDistricts={setvalueDistricts}
                  valueDistricts={valueDistricts}
                  lang={lang}
                />
              </div>

              <Search
                valueCity={valueCity}
                setResult={setResult}
                setValidationShow={setValidationShow}
                valueDistricts={valueDistricts}
                setTopActive={setTopActive}
                lang={lang}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <List pharmacies={result} lang={lang} />
        </div>
      </div>
    </div>
  );
}

export default App;
