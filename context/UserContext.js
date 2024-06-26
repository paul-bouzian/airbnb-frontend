import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        setUser(JSON.parse(user));
      }
    };
    loadUser();
  }, []);

  const saveUser = async (user) => {
    await AsyncStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const deleteUser = async () => {
    await AsyncStorage.removeItem("user");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, saveUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
