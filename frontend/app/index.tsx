import { View, StyleSheet, FlatList } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import AddTodo from "../components/atoms/AddTodo";
import TodoItem from "../components/atoms/TodoItem";
import { useBoolean } from "../hooks/useBoolean";
import Modal from "../components/atoms/Modal";
import AddTodoForm from "../components/molecules/AddTodoForm";

const data = [
  {
    id: 1,
    text: "Create todo list item card",
    done: true,
  },
  {
    id: 2,
    text: "Add delete options",
    done: false,
  },
  {
    id: 3,
    text: "Finish it",
    done: true,
  },
];

function Home() {
  const { top } = useSafeAreaInsets();
  const {
    value: isAddTodoModalVisible,
    setFalse: hideAddTodoModal,
    setTrue: showAddTodoModal,
  } = useBoolean();

  return (
    <SafeAreaView style={styles.container} edges={{ top: "off" }}>
      <View style={[styles.headerContainer, { paddingTop: top }]}>
        <View style={styles.headerInnerContainer}>
          <AddTodo onPress={showAddTodoModal} />
        </View>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        style={styles.todosListContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TodoItem
            containerStyle={styles.todoItemContainer}
            id={item.id}
            text={item.text}
            done={item.done}
          />
        )}
      />
      <Modal
        visible={isAddTodoModalVisible}
        onClose={hideAddTodoModal}
        containerStyle={styles.modalContainer}
      >
        <AddTodoForm />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6FFFD",
  },
  headerContainer: {
    backgroundColor: "#B799FF",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  headerInnerContainer: {
    height: 80,
    padding: 16,
    alignItems: "flex-end",
  },
  todosListContainer: {
    marginTop: 32,
    paddingHorizontal: 8,
  },
  todoItemContainer: {
    marginBottom: 16,
  },
  modalContainer: {
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  bgPurple: {
    backgroundColor: "#B799FF",
  },
});

export default Home;
