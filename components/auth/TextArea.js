import { TextInput, View } from "react-native";
import "../../global.css";

const TextArea = ({ placeholder, value, onChange }) => {
  return (
    <View className="w-full">
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        multiline
        numberOfLines={4}
        style={{
          borderBottomWidth: 2,
          borderBottomColor: "#FFBAC0",
          paddingBottom: 8,
          fontSize: 18,
        }}
      />
    </View>
  );
};

export default TextArea;
