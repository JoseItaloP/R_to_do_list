import React from "react";
import Input from "./Input/Input";
import Button from "./Input/Button";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

import styles from "./Resgistrar.module.css";

const Resgistrar = () => {
  const [valor, setValor]=React.useState({
    username: "",
    password: "",
    Cpassword: ""
  })
  const [error, setError] = React.useState("")
  const navigate = useNavigate();
  const {signup} = UseAuth()

  const hamdleSubmit = ({target})=>{
    const {id, value} = target
    setValor((prevState)=>({
      ...prevState,
      [id]: value
    }))
  }

  const hamdleSignup =(evt) =>{
    evt.preventDefault()
    if(!valor.username | !valor.password | !valor.Cpassword){
      setError("Fill in all fields")
      return
    }else if (valor.password !== valor.Cpassword){
      setError("Passwords must be different")
      return
    }

    const res = signup(valor.username, valor.password)

    if(res){
      setError(res)
      return
    }

    alert("New user registered")
    navigate("/")
  }

  return (
    <div className={styles.Back}>
      <form className={`animeLeft ${styles.form}`}>
        <h1>Registrate</h1>
        <Input label="Username" type="text" nome="username" onChange={hamdleSubmit}/>
        <Input label="Password" type="password" nome="password" onChange={hamdleSubmit}/>
        <Input label="Confirm Password" type="password" nome="Cpassword" onChange={hamdleSubmit}/>
        {error}
        <Button onClick={hamdleSignup}>Enviar</Button>
        <Link to="/login" className={styles.voltar}>
          Come Back
        </Link>
      </form>
    </div>
  );
};

export default Resgistrar;
