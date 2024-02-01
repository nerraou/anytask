import { Text, View, StyleSheet, Alert } from "react-native";
import Input from "./Input";
import Email from "./Email";
import Password from "./Password";
import Button from "./Button";
import { useState } from "react";
import useSignUpMutation from "../../services/useSignUpMutation";

function SignUp() {
  const { mutate, isPending, isError, isSuccess, error } = useSignUpMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateEmail(newEmail: string) {
    const validRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (newEmail.match(validRegEx)) return true;
    return false;
  }

  function validatePassword(newPassword: string) {
    const valiRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (newPassword.match(valiRegEx)) return true;
    return false;
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Sign Up</Text>
      <View style={style.inputsContainer}>
        <Input
          onChange={(newEmail) => {
            setEmail(newEmail);
          }}
          value={email}
          icon={<Email />}
          placeholder="Email"
          containerStyle={style.inputContainer}
        />
        <Input
          onChange={(newPassword) => {
            setPassword(newPassword);
          }}
          value={password}
          icon={<Password />}
          placeholder="Password"
          containerStyle={style.inputContainer}
        />
      </View>
      <Button
        title="Sign Up"
        onPress={() => {
          if (!validatePassword(password)) {
            Alert.alert("Error", "Try a stong password!");
          }
          if (!validateEmail(email)) {
            Alert.alert("Error", "Bad Email!");
          }
          mutate({ email: email, password: password });
          if (isSuccess) Alert.alert("Success", "Welcome to AnyTask!");
          if (isError) {
            console.log(error.message);
            Alert.alert("Error", "Somthing went wrong");
          }
        }}
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

export default SignUp;
