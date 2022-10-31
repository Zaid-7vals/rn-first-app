import React, { useState } from "react";
import { TextInput, Button, View, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [goal, setGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(goal);
    setGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type your Goal"
          onChangeText={goalInputHandler}
          style={styles.input}
          value={goal}
        />
        <View style={styles.button}>
          <Button title="ADD" onPress={addGoalHandler} />
          <Button title="CANCEL" color="red" onPress={props.onCancel} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: "5%",
    borderColor: "black",
    borderWidth: 2,
    padding: 3,
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "50%"
  },
});

export default GoalInput;
