import React from "react";
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';   

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
  distanceKm
})
 {
   let yakinlik;
   if(distanceKm){
    yakinlik=distanceKm.toFixed(1)
   }
 
  const yolText = () => {
    if(YolTarifi === "" || YolTarifi === null){
      return YolTarifi =`${EczaneAdi} için yol tarifi bulunmamaktadır.` 
    }else {
      return YolTarifi.slice(0,100);
    }
  }
  yolText()
  const url = `https://www.google.com/maps?daddr=${latitude},${longitude}`
  return (
   <div className="col-12 col-sm-5 col-md-4 col-lg-3 mt-4 ">
      <div className="card">
      <div className="card-body">
        <h5 className="card-title"><b>{EczaneAdi}</b> {distanceKm ?  <span className="badge bg-secondary float-end rounded-pill">{yakinlik} km</span> : ""} </h5>
        <p className="card-text"><b>Adres :</b>{Adresi}</p>
      </div>
      <ul className="list-group list-group-flush ">
        <li className="list-group-item bg-transparent"><b>Tel: </b><a href={`tel:${Telefon}`}>{Telefon}</a></li>
        <li className="list-group-item bg-transparent" style={{maxHeight: "50px"}}><b>Yol tarifi :</b> {YolTarifi} </li>
        <li className="list-group-item bg-transparent"><b>Şehir:</b>{Sehir}<b> İlçe:</b>{ilce} </li>
        <div className="row">
          <a href={url} className="text-white reset pe-1  col-7">
            <button className="btn btn-primary  btn-card w-100">Haritada göster <BiMap /></button>
          </a>
          <a href={`tel:${Telefon}`} className="text-white reset ps-0  col-5 ">
            <button className="btn btn-success btn-card w-100">Ara <BsFillTelephoneFill  /></button>
          </a>
        </div>
      </ul>
      </div>
   </div>
  );
}

export default Pharmacy;

// text-truncate