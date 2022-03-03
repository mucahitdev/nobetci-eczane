import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { IntlProvider, FormattedMessage } from "react-intl";
import { appLang } from "./lang";

function Pharmacy({
  Adresi,
  EczaneAdi,
  Sehir,
  Semt,
  Telefon,
  Telefon2,
  YolTarifi,
  ilce,
  latitude,
  longitude,
  distanceKm,
  lang,
}) {
  let yakinlik;
  if (distanceKm) {
    yakinlik = distanceKm.toFixed(1);
  }

  const yolText = () => {
    if (YolTarifi === "" || YolTarifi === null) {
      if(lang === "tr-TR"){
        return (YolTarifi = `${EczaneAdi} için yol tarifi bulunmamaktadır.`);
      }if(lang === "en-US"){
        return (YolTarifi = `No directions were found for ${EczaneAdi}`);
      }
      
    } else {
      return YolTarifi.slice(0, 100);
    }
  };
  yolText();
  const url = `https://www.google.com/maps?daddr=${latitude},${longitude}`;
  return (
    <div className="col-12 col-sm-5 col-md-4 col-lg-3 mt-4 ">
      <IntlProvider locale={lang} messages={appLang[lang]}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              <b>{EczaneAdi}</b>{" "}
              {distanceKm ? (
                <span className="badge bg-secondary float-end rounded-pill">
                  {yakinlik} km
                </span>
              ) : (
                ""
              )}{" "}
            </h5>
            <p className="card-text">
              <b><FormattedMessage id="adres" /> :</b>
              {Adresi}
            </p>
          </div>
          <ul className="list-group list-group-flush ">
            <li className="list-group-item bg-transparent">
              <b><FormattedMessage id="tel" /> : </b>
              <a href={`tel:${Telefon}`}>{Telefon}</a>
            </li>
            <li
              className="list-group-item bg-transparent"
              style={{ maxHeight: "50px" }}
            >
              <b><FormattedMessage id="tarif" /> :</b> {YolTarifi}{" "}
            </li>
            <li className="list-group-item bg-transparent">
              <b><FormattedMessage id="city" />:</b>
              {Sehir}
              <b><FormattedMessage id="district" />:</b>
              {ilce}
            </li>
            <div className="row">
              <a href={url} className="text-white reset pe-1  col-7">
                <button className="btn btn-primary  btn-card w-100">
                <FormattedMessage id="showmap" /> <BiMap />
                </button>
              </a>
              <a
                href={`tel:${Telefon}`}
                className="text-white reset ps-0  col-5 "
              >
                <button className="btn btn-success btn-card w-100">
                <FormattedMessage id="call" /> <BsFillTelephoneFill />
                </button>
              </a>
            </div>
          </ul>
        </div>
      </IntlProvider>
    </div>
  );
}

export default Pharmacy;

// text-truncate
