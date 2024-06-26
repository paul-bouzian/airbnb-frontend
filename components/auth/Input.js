import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import "../../global.css";

export default AuthInput = ({ placeholder, value, onChange, type }) => {
  const [toggleVisibility, setToggleVisibility] = useState(
    type === "password" ? false : true
  );
  return (
    <View className="w-full gap-4">
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        className="w-full"
        borderBottomWidth={2}
        borderBottomColor="#FFBAC0"
        paddingBottom={8}
        fontSize={18}
        secureTextEntry={!toggleVisibility}
      />
      {type === "password" && (
        <Pressable onPress={() => setToggleVisibility(!toggleVisibility)}>
          <Feather
            name={toggleVisibility ? "eye" : "eye-off"}
            size={20}
            color="gray"
          />
        </Pressable>
      )}
    </View>
  );
};
