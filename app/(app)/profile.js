import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { UserContext } from "../../context/UserContext";

const ProfileScreen = () => {
  const { deleteUser } = useContext(UserContext);

  return (
    <View>
      <Button
        title="Logout"
        onPress={() => {
          deleteUser();
        }}
      >
        <Text>Logout</Text>
      </Button>
    </View>
  );
};

export default ProfileScreen;
