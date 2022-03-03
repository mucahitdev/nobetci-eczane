import React from "react";
import apiKey from "../asset/apiKey";
import { GiPositionMarker } from 'react-icons/gi';
import { usePosition } from 'use-position';
import axios from "axios";
import { IntlProvider, FormattedMessage } from "react-intl";
import { appLang } from "./lang";




function Search({ setResult, valueCity, setValidationShow, valueDistricts,setTopActive,lang }) {
  const {
    latitude,
    longitude,
  } = usePosition();
  const cevir = (text) => {
    var trMap = {
      çÇ: "c",
      ğĞ: "g",
      şŞ: "s",
      üÜ: "u",
      ıİ: "i",
      öÖ: "o",
    };
    for (var key in trMap) {
      text = text.replace(new RegExp("[" + key + "]", "g"), trMap[key]);
    }
    return text
      .replace(/[^-a-zA-Z0-9\s]+/gi, "")
      .replace(/\s/gi, "-")
      .replace(/[-]+/gi, "-")
      .toLowerCase();
  };

  const eczanebul = () => {
      if (valueCity.label === undefined) {
        return setValidationShow(true);
      }
      let ilceBuyuk = valueDistricts.label;
      if (ilceBuyuk !== undefined) {
        var ilceKucuk = cevir(ilceBuyuk);
      } else {
        ilceKucuk = "";
      }
      setTopActive(false)
      let sehirBuyuk = valueCity.label;
      const sehirKucuk = cevir(sehirBuyuk);
      var axios = require("axios").default;
  
      var options = {
        method: "GET",
        url: `https://www.nosyapi.com/apiv2/pharmacy?city=${sehirKucuk}&county=${ilceKucuk}`,
        headers: {
          "Content-Type": "application/json",
          Authorization:
          `Bearer ${apiKey}` //Api key kısmı için kendi apinizi alın.
        },
      };
  
      axios
        .request(options)
        .then(function (response) {
          setResult(response.data.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    
  };
  const konumlabul = () => {
    setTopActive(false)
    setValidationShow(false)
    var options = {
      method: "GET",
      url: `https://www.nosyapi.com/apiv2/pharmacy/distance?latitude=${latitude}&longitude=${longitude}`,
      headers: {
        "Content-Type": "application/json",
        Authorization:
        `Bearer ${apiKey}` //Api key kısmı için kendi apinizi alın.
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setResult(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
   
  
  }
  return (
    <div className="col-12 py-2 col-lg-2 d-flex align-items-start justify-content-center">
      <button className="btn w-100 btn-danger btn-eczane text-white" onClick={eczanebul}>
        <IntlProvider locale={lang} messages={appLang[lang]}> 
          <b> <FormattedMessage id="bul"/></b>
        </IntlProvider>
      </button>
      <button className="btn  btn-info btn-konum w-50 text-white" onClick={konumlabul}>
        <GiPositionMarker />
      </button>
    </div>
  );
}

export default Search;
