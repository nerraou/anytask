import { Text, StyleSheet, View } from "react-native";
import CheckList from "../components/atoms/CheckList";
import SignUp from "../components/atoms/SignUp";
import { Link } from "expo-router";

function Page() {
  return (
    <View style={style.container}>
      <Text style={style.title}>AnyTask</Text>
      <View style={style.checkList}>
        <CheckList />
      </View>
      <View>
        <SignUp />
        <Link href={"/signin"}>You have account?</Link>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6FFFD",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#B799FF",
    fontSize: 32,
  },
  checkList: {
    margin: 16,
  },
});

export default Page;
