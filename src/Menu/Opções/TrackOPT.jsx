import React, { useEffect } from 'react'
import { AiOutlineMore, AiOutlineClose } from "react-icons/ai";
import DeleteTrack from './TrackOPT/DeleteTrack';
import EditTrack from './TrackOPT/EditTrack';

import style from './TrackOPT.module.css'

const TrackOPT = (chave) => {
    const [spawn, setSpawn] = React.useState(false);
    
    useEffect(()=>{
      console.log(chave)
    }, [])
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
                <DeleteTrack chave={chave} />
                <EditTrack chave={chave}/>
              </section>
            </div>
        </div>
       ) : null}  
       <button>
          <AiOutlineMore className={style.svg} onClick={()=> setSpawn(true)}/>
      </button>
    </>
  )
}

export default TrackOPT
