import React from "react";
import UseAuth from "../../../Hooks/UseAuth";
import { AiOutlineClose } from "react-icons/ai";
import Input from "../../../Login/Input/Input";
import Button from "../../../Login/Input/Button";

import style from './EditTrack.module.css'

const EditTrack = ({ chave }) => {
  const { user, store } = UseAuth();
  const [fitTrack, setFitTrack] = React.useState({
    content: [],
  });
  const [spawn, setSpawn] = React.useState(false);
  const [value, setValue] = React.useState({
    TYWK: "",
    Dhours: "",
    LWhours: "",
  });

  function hamdleChange({ target }) {
    const { id, value } = target;
    setValue((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  }

   function HamdleClick() {
    const usuario = JSON.parse(
      localStorage.getItem(`user_content:${user.username}`)
    );
    localStorage.removeItem(`user_content:${user.username}`)
    
    usuario.map((content) => {
      if(content.key !== chave.chave){
        const newTrackData = {
          key: content.key,
          TYWK: content.TYWK,
          Dhours: content.Dhours,
          LWhours: content.LWhours
        };
        setFitTrack((prevState) => ({
          content: [
            ...prevState.content,newTrackData],
        }));
      }
       if (content.key === chave.chave) {
        const newTrackData = {
          key: chave.chave,
          TYWK: value.TYWK,
          Dhours: value.Dhours,
          LWhours: value.LWhours
        };
        setFitTrack((prevState) => ({
          content: [
            ...prevState.content,newTrackData],
        }));
      }
    });
    setSpawn(false);
    location.reload();
  }

  React.useEffect(() => {
    if (fitTrack.content.length > 0 && user) {
        store(fitTrack.content, user.username);
    }
}, [fitTrack.content, user.username]);

  return (
    <>
      {spawn ? (
        <div className={`${style.Back_Pop}`}>
          <div className={`center ${style.bag_g}`}>
            <header className={style.header}>
              <h1>Build a Time Track</h1>
              <button onClick={() => setSpawn(false)}>
                <AiOutlineClose className={style.svg} />
              </button>
            </header>

            <form className={style.pop_up}>
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
              <Button onClick={HamdleClick}>Enviar</Button>
            </form>
          </div>
        </div>
      ) : null}
      <button className="button" onClick={()=>setSpawn(true)}>
        Edit
      </button>
    </>
  );
};

export default EditTrack;
