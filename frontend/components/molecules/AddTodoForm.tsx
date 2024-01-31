import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Button from "../atoms/Button";
import Input from "../atoms/Input";

function AddTodoForm() {
  const [todoText, setTodoText] = useState("");

  return (
    <View style={styles.container}>
      <Input
        placeholder="What you want to do next?"
        value={todoText}
        onChange={setTodoText}
      />

      <Button
        title="Create"
        onPress={() => {}}
        containerStyle={styles.buttonContainer}
      />
    </View>
  );
}

export default AddTodoForm;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    alignItems: "center",

    backgroundColor: "#E6FFFD",
    borderWidth: 2,
    borderColor: "#7B61FF",
    borderRadius: 16,
  },
  buttonContainer: {
    marginTop: 32,
    backgroundColor: "#FFB8B8",
  },
});
