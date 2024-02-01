import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Button from "../atoms/Button";
import Input from "../atoms/Input";
import useAddTodoMutation from "../../services/useAddTodoMutation";
import { useAuth } from "../../hooks/useAuth";

function AddTodoForm() {
  const [todoText, setTodoText] = useState("");

  const auth = useAuth();

  const addTodoMutation = useAddTodoMutation({
    token: auth.user?.accessToken as string,
  });

  function submitHandler() {
    if (todoText.length >= 1) {
      addTodoMutation.mutate({
        text: todoText,
      });
      setTodoText("");
    }
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder="What you want to do next?"
        value={todoText}
        onChange={setTodoText}
      />

      <Button
        title="Create"
        onPress={submitHandler}
        loading={addTodoMutation.isPending}
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
