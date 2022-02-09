import React from "react";

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
})
 {
   const url = `https://www.google.com/maps?daddr=${latitude},${longitude}`
  return (
    <div className="col-12 col-md-6 col-lg-4 me-2 ms-2 mt-3  card">
      <div className="card-body">
        <h5 className="card-title"><b>{EczaneAdi}</b></h5>
        <p className="card-text"><b>Adres :</b>{Adresi}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><b>Telefon :</b>{Telefon}</li>
        <li className="list-group-item"><b>Yol tarifi :</b> {YolTarifi === "" || YolTarifi === null ? `${EczaneAdi} için yol tarifi bulunmamaktadır.`  :YolTarifi} </li>
        <li className="list-group-item"><b>Şehir : </b>{Sehir} <b>İlçe : </b>{ilce} </li>
        <button className="btn btn-primary ">
          <a href={url} className="text-white"><b>{EczaneAdi}</b>'ni haritada göster.</a>
        </button>
      </ul>
      <div className="card-body"></div>
    </div>
  );
}

export default Pharmacy;
