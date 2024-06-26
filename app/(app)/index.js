import { Button, Text, View } from "react-native";

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const HomeScreen = () => {
  const { user, saveUser, deleteUser } = useContext(UserContext);

  return (
    <View>
      <Text>Bienvenue à la maison!</Text>
      <Button
        title="Log"
        onPress={() => {
          alert(JSON.stringify(user));
        }}
      />
      <Button
        title="Logout"
        onPress={() => {
          deleteUser();
        }}
      />
      {user && <Text>{user.name}</Text>}
    </View>
  );
};

export default HomeScreen;
