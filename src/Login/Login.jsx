import React, { useEffect } from "react";
import Input from "./Input/Input";
import Button from "./Input/Button";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

import styles from "./Login.module.css";

const Login = () => {
  const { signin, user } = UseAuth();
  const navigate = useNavigate();
  const [valor, setValor] = React.useState({
    username: "",
    password: "",
  });
  const [error, setError] = React.useState("");
  const [lock, setLock] = React.useState(false)

  function hamdleChange({ target }) {
    if (error.length > 0) setError("");
    const { id, value } = target;
    setValor((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  }


  const handleLogin = (evt) => {
    evt.preventDefault()
    if (!valor.username | !valor.password) {
      setError("Fill in all fields");
      return;
    }
    const res = signin(valor.username, valor.password);

    if (res) {
      setError(res);
      return;
    }

    navigate("/menu");
  };

  useEffect(()=>setLock[!lock], [navigate])

  if(localStorage.getItem("user_db")) handleLogin;
  return (
    <div className={styles.Back}>
      <form className={`animeLeft ${styles.form}`}>
        <h1>Login</h1>
        <Input
          label="Username"
          type="text"
          nome="username"
          onChange={hamdleChange}
        />
        <Input
          label="Password"
          type="password"
          nome="password"
          onChange={hamdleChange}
        />
        <p>{error}</p>
        {lock ? (
            <button disabled className={styles.btn}>Caregando...</button>
          ) : (
          <Button onClick={handleLogin}>Enviar</Button>
          )
        }
        <Link to="/criar" className={styles.Resgistrar}>
          Resgistrate
        </Link>
      </form>
    </div>
  );
};

export default Login;
