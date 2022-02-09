import React from "react";
import apiKey from "../asset/apiKey";

function Search({ setResult, valueCity, setValidationShow, valueDistricts }) {
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
        console.log(response.data.data);
        setResult(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <div className="col-12 d-flex justify-content-center ">
      <button className="btn btn-danger text-white" onClick={eczanebul}>
        <b>Eczaneyi Bul </b>
      </button>
    </div>
  );
}

export default Search;
