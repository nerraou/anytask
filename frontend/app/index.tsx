import { View, StyleSheet } from "react-native";
import AddTodo from "../components/atoms/AddTodo";

function Home() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <AddTodo />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6FFFD",
  },
  header: {
    backgroundColor: "#B799FF",
    height: 80,
    padding: 16,
    alignItems: "flex-end",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
});

export default Home;
