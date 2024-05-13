import React from "react";
import TrackOPT from "./Opções/TrackOPT.jsx";

import style from "./Track.module.css";


const Track = ({ Trackkey, TYWK, Dhours, LWhours }) => {
  return (
    <div key={Trackkey} className={style.box} >
      {console.log(Trackkey)}
      <section className={style.sec01}>
        <h2>{TYWK}</h2>
        <TrackOPT chave={Trackkey}/>
      </section>
      <section className={style.sec02}>
        <h2>{Dhours}hrs</h2>
        <p>Ultima Semana - {LWhours}hrs</p>
      </section>
    </div>
  );
};

export default Track;
