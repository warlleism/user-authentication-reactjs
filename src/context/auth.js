import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const useToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("user_db");

    if (useToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user) => user.email === JSON.parse(useToken).email
      );

      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  const login = (email, password) => {
    const usersStorage = localStorage.getItem("user_db");
    const itens = JSON.parse(usersStorage);

    const hasUser = itens?.filter((user) => user.email === email);
    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ email, token }));
        setUser({ email, password });
        return;
      } else {
        return "E-mail ou senha incorretos";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };

  const signup = (email, password) => {
    const usersStorage = localStorage.getItem("user_db");
    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      return "Conta já cadastrada com esse email";
    }

    let newUser;

    if (usersStorage) {
      newUser = [...usersStorage, { email, password }];
    } else {
      newUser = [{ email, password }];
    }

    localStorage.setItem("user_db", JSON.stringify(newUser));
  };

  const signout = () => {
    try {
      setUser(null);
      localStorage.removeItem("user_token");
      localStorage.removeItem("user_db");
      return { status: 200 };
    } catch (error) {
      return { status: 500 };
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, login, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
