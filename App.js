import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [goal, setGoal] = useState("");
  const [goalsList, setGoalsList] = useState([]);
  
  const goalInputHandler = (enteredText) => {
    setGoal(enteredText);
  }

  const goalOutputHandler = () => {
    setGoalsList(currentGoals => [...goalsList, goal]);
    console.log(goalsList);
  }
  
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Type your Goal" onChangeText={goalInputHandler} style={styles.input} />
        <Button title="Press Me" onPress={goalOutputHandler} style={styles.button} />
      </View>
      <View>
        <Text>{}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
  },
  input: {
    width: 220,
    borderBottomColor: "black",
    borderBottomWidth: 3,
    padding: 3,
  },
  button: {
    padding: 5
  }
});
