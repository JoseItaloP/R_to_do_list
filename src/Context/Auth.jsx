import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [name, setName] = useState();
  const [img, setImg] = useState()

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("user_db");

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user) => user.username === JSON.parse(userToken).username
      );

      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  useEffect(() => {
    if (user !== undefined) {
      const storedName = localStorage.getItem(`${user.username}_name`);
      const storedImg = localStorage.getItem(`${user.username}_img`);
  
      if (storedName) {
        if (!name) {
          setName(storedName);
        } else if (name !== storedName) {
          localStorage.setItem(`${user.username}_name`, name);
        }
      } else {
        localStorage.setItem(`${user.username}_name`, user.username);
      }
  
      if (storedImg) {
        if (!img) {
          setImg(storedImg);
        } else if (img !== storedImg) {
          localStorage.setItem(`${user.username}_img`, img);
        }
      } else {
        localStorage.setItem(`${user.username}_img`, JSON.stringify(img));
      }
    }
  }, [img, user, name]);
  

  const changeName = (newName) => setName(newName);

  const changeImg = (newImg) => setImg(newImg)



  const signin = (username, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("user_db"));
    console.log(usersStorage);

    const hasUser = usersStorage?.filter((user) => user.username === username);
    console.log(hasUser);

    if (hasUser?.length) {
      if (
        hasUser[0].username === username &&
        hasUser[0].password === password
      ) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ username, token }));
        setUser({ username, password });
        return;
      } else {
        return "Usuario ou senha incorretos";
      }
    } else {
      return "Conta não cadastrada";
    }
  };

  const signup = (username, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("user_db"));

    const hasUser = usersStorage?.filter((user) => user.username === username);

    if (hasUser?.length) {
      return "Já ah uma conta com esse UserName";
    }

    let newUser;

    if (usersStorage) {
      newUser = [...usersStorage, { username, password }];
    } else {
      newUser = [{ username, password }];
    }

    localStorage.setItem("user_db", JSON.stringify(newUser));
    return;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  const store = (content, user) => {
    const retrieveContent = localStorage.getItem(`user_content:${user}`);

    if (retrieveContent) {
      const existingContent = JSON.parse(retrieveContent);
      const existingKeys = existingContent.map((trackData) => trackData.key);

      // Filtra as novas entradas para garantir que apenas chaves únicas sejam adicionadas
      const newContent = content.filter(
        (trackData) => !existingKeys.includes(trackData.key)
      );

      // Concatena as novas entradas com o conteúdo existente
      const updatedContent = [...existingContent, ...newContent];
      localStorage.setItem(
        `user_content:${user}`,
        JSON.stringify(updatedContent)
      );
    } else {
      localStorage.setItem(`user_content:${user}`, JSON.stringify(content));
    }
  };

  const retriveStore = (user) => {
    const retriveContent = localStorage.getItem(`user_content:${user}`);
    if (retriveContent) {
      return JSON.parse(retriveContent);
    } else {
      return [];
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signed: !!user,
        name,
        img,
        signin,
        signup,
        signout,
        store,
        retriveStore,
        changeName,
        changeImg,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
