import React from "react";
import { AiOutlineMore, AiOutlineClose } from "react-icons/ai";
import ChangeName from "./ChangeName";
import ChangePhoto from "./ChangePhoto";
import SingOut from "./SingOut";

import style from './Options.module.css'

const Options = () => {
  const [spawn, setSpawn] = React.useState(false);

  return (
    <>
       {spawn ? (
        <div className={`animeLeft ${style.Back_Pop}`}>
            <div className={`center ${style.bag_g}`}>
              <section className={style.headerOPT}>
                  <h1>OPTIONS</h1>
                  <button onClick={() => setSpawn(false)}>
                    <AiOutlineClose className={style.closeSVG}/>
                  </button>
              </section>
              <section className={style.bodyOPT}>
                <ChangeName />
                <ChangePhoto />
                <SingOut/>
              </section>
            </div>
        </div>
       ) : null} 
      <button>
          <AiOutlineMore className={style.svg} onClick={()=> setSpawn(true)}/>
      </button>
    </>
  );
};

export default Options;
