import { Text, View, StyleSheet } from "react-native";
import Input from "./Input";
import Email from "./Email";
import Password from "./Password";
import Button from "./Button";

function SignUp() {
  return (
    <View style={style.container}>
      <Text style={style.title}>Sign Up</Text>
      <View style={style.inputsContainer}>
        <Input
          icon={<Email />}
          placeholder="Email"
          containerStyle={style.inputContainer}
        />
        <Input
          icon={<Password />}
          placeholder="Password"
          containerStyle={style.inputContainer}
        />
      </View>
      <Button title="Sign Up" onPress={() => {}} />
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
