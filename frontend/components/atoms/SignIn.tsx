import { Text, View, StyleSheet } from "react-native";
import Input from "./Input";
import Email from "./Email";
import Password from "./Password";
import Button from "./Button";

function SignIn() {
  return (
    <View style={style.container}>
      <Text style={style.title}>Sign In</Text>
      <View style={style.containerInput}>
        <Input icon={<Email />} placeholder="Email" />
        <Input icon={<Password />} placeholder="Password" />
      </View>
      <Button title="Sign In" onPress={() => {}} />
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
  containerInput: {
    padding: 10,
    gap: 24,
    marginVertical: 24,
  },
});

export default SignIn;
