import React, { useEffect } from "react";
import Header from "./Header";
import Add_Track from "./Add_Track";
import Input from "../Login/Input/Input";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../Login/Input/Button";
import Track from "./Track";
import UseAuth from "../Hooks/UseAuth";

import style from "./Menu.module.css";

const Menu = () => {
  const [fitTrack, setFitTrack] = React.useState({
    content: [],
  });
  const [spawn, setSpawn] = React.useState(false);
  const [value, setValue] = React.useState({
    TYWK: "",
    Dhours: "",
    LWhours: "",
  });
  const {store, user, retriveStore} = UseAuth()

  function hamdleChange({ target }) {
    const { id, value } = target;
    setValue((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  }

  function CallTrack(evt) {
    evt.preventDefault();
    const newTrackData = {
      key: fitTrack.content.length,
      TYWK: value.TYWK,
      Dhours: value.Dhours,
      LWhours: value.LWhours
    };
    setFitTrack((prevState) => ({
      content: [
        ...prevState.content,newTrackData],
    }));

    console.log(fitTrack.content)

    setSpawn(false);
  }

  useEffect(() => {
    if (fitTrack.content.length > 0 && user) {
        store(fitTrack.content, user.username);
    }
}, [fitTrack.content, user.username]);

  return (
    <div className={`background`}>
      {spawn ? (
        <div className={`animeLeft ${style.Back_Pop}`}>
          <div className={`center ${style.bag_g}`}>
            <header className={style.header}>
              <h1>Build a Time Track</h1>
              <button onClick={() => setSpawn(false)}>
                <AiOutlineClose className={style.svg} />
              </button>
            </header>

            <form onSubmit={CallTrack} className={style.pop_up}>
              <Input
                label="Type of work"
                type="text"
                nome="TYWK"
                onChange={hamdleChange}
              />
              <Input
                label="Day Hours"
                type="number"
                nome="Dhours"
                onChange={hamdleChange}
              />
              <Input
                label="Last Week Hours"
                type="number"
                nome="LWhours"
                onChange={hamdleChange}
              />
              <Button>Enviar</Button>
            </form>
          </div>
        </div>
      ) : null}
      <section className={`center`}>
        <Header />
        <div className={style.track}>
        { retriveStore(user.username).map((trackData) => (
          
            <Track
              key={trackData.key}
              Trackkey={trackData.key}
              TYWK={trackData.TYWK}
              Dhours={trackData.Dhours}
              LWhours={trackData.LWhours}
            />
          ))
          
        }
          <Add_Track onclick={() => setSpawn(true)} />
        </div>
      </section>
    </div>
  );
};

export default Menu;
