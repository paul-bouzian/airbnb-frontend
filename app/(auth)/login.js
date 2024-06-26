import { Link } from "expo-router";
import { useContext, useState } from "react";
import { Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AuthButton from "../../components/auth/Button";
import AuthInput from "../../components/auth/Input";
import Logo from "../../components/ui/Logo";
import { UserContext } from "../../context/UserContext";
import "../../global.css";
import checkForm from "../../lib/auth/Login/checkForm";
import fetchLogin from "../../lib/auth/Login/fetchLogin";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [credentialsError, setCredentialsError] = useState("");
  const { saveUser } = useContext(UserContext);

  const handleLogin = async () => {
    setLoading(true);
    setCredentialsError("");
    if (!checkForm(email, password, setCredentialsError)) {
      setLoading(false);
      return;
    }
    const response = await fetchLogin(email, password, setCredentialsError);
    if (response) {
      await saveUser(response);
    }
    setLoading(false);
  };

  return (
    <KeyboardAwareScrollView
      className="flex-1"
      contentContainerStyle={{ padding: 14, alignItems: "center" }}
    >
      <View className="items-center justify-center gap-8 p-4">
        <Logo className="w-32 h-32" />
        <Text className="text-3xl font-semibold text-gray-500">Sign in</Text>
      </View>
      <View className="items-center justify-center mt-12 gap-12 p-4 w-full">
        <AuthInput placeholder="email" value={email} onChange={setEmail} />
        <AuthInput
          placeholder="password"
          value={password}
          onChange={setPassword}
          type="password"
        />

        {credentialsError && (
          <Text className="text-red-500">{credentialsError}</Text>
        )}
      </View>

      <View className="w-full items-center mt-20 gap-4">
        <AuthButton title="Sign in" loading={loading} onPress={handleLogin} />
        <Text className="text-gray-500">
          No account ? <Link href="/signup">Register</Link>
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
}
