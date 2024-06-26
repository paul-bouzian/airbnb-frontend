import { Link } from "expo-router";
import { useState } from "react";
import { Image, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AuthButton from "../../components/auth/Button";
import AuthInput from "../../components/auth/Input";
import TextArea from "../../components/auth/TextArea";
import "../../global.css";
import checkForm from "../../lib/auth/Signup/checkForm";
import fetchSignup from "../../lib/auth/Signup/fetchSignup";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [credentialsError, setCredentialsError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setLoading(true);
    setCredentialsError("");
    if (
      !checkForm(
        username,
        email,
        description,
        password,
        confirmPassword,
        setCredentialsError
      )
    ) {
      setLoading(false);
      return;
    }
    const response = await fetchSignup(
      email,
      username,
      description,
      password,
      setCredentialsError
    );
    if (response === 201) {
      alert("Account created");
    }
    setLoading(false);
  };

  return (
    <KeyboardAwareScrollView
      className="flex-1"
      contentContainerStyle={{ padding: 14, alignItems: "center" }}
    >
      <View className="items-center justify-center gap-8 p-4">
        <Image
          source={require("../../assets/img/airbnb-logo.png")}
          className="w-28 h-28"
          resizeMode="contain"
        />
        <Text className="text-3xl font-semibold text-gray-500">Sign up</Text>
      </View>
      <View className="items-center justify-center gap-12 p-4 w-full">
        <AuthInput placeholder="email" value={email} onChange={setEmail} />
        <AuthInput
          placeholder="username"
          value={username}
          onChange={setUsername}
        />
        <TextArea
          placeholder="description"
          value={description}
          onChange={setDescription}
        />
        <View className="w-full gap-4">
          <AuthInput
            placeholder="password"
            value={password}
            onChange={setPassword}
            type="password"
          />
          <AuthInput
            placeholder="confirm password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            type="password"
          />
        </View>
      </View>

      {credentialsError && (
        <Text className="text-red-500">{credentialsError}</Text>
      )}

      <View className="w-full items-center mt-8 gap-4">
        <AuthButton title="Sign up" loading={loading} onPress={handleSignup} />
        <Text className="text-gray-500">
          Already have an account ? <Link href="/login">Sign in</Link>
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
}
