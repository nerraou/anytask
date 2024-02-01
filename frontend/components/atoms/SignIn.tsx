import { useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import { router } from "expo-router";

import Input from "./Input";
import Email from "./Email";
import Password from "./Password";
import Button from "./Button";
import { useAuth } from "../../hooks/useAuth";

function SignIn() {
  const auth = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submitHandler() {
    try {
      await auth.signIn(email, password);
      router.replace("/");
    } catch (error) {
      Alert.alert("Wrong Credentials", "Email and/or password are incorrect!");
    }
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Sign In</Text>
      <View style={style.inputsContainer}>
        <Input
          value={email}
          onChange={setEmail}
          icon={<Email />}
          placeholder="Email"
          containerStyle={style.inputContainer}
        />
        <Input
          value={password}
          onChange={setPassword}
          icon={<Password />}
          placeholder="Password"
          containerStyle={style.inputContainer}
        />
      </View>
      <Button
        loading={auth.signInMutationMetadata.isPending}
        title="Sign In"
        onPress={submitHandler}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8FF",
    padding: 32,
    borderWidth: 1,
    borderRadius: 16,
  },
  title: {
    color: "#B799FF",
    fontSize: 32,
  },
  inputsContainer: {
    padding: 10,
    gap: 24,
    marginVertical: 24,
  },
  inputContainer: {
    width: 247,
  },
});

export default SignIn;
