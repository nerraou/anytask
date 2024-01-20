import { Text, View, StyleSheet, TextInput } from "react-native";

function SignIn() {
  return (
    <View style={style.container}>
      <Text style={style.title}>Sign In</Text>
      <TextInput style={[style.input]} placeholder="Email" />
      <TextInput style={style.input} placeholder="Password" />
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
  input: {
    borderWidth: 1,
    borderColor: "#ACBCFF",
    borderRadius: 8,
    width: 247,
    margin: 24,
    padding: 8,
  },
});

export default SignIn;
