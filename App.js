import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredGoal, setGoal] = useState("");
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Type your Goal" style={styles.input} />
        <Button title="Press Me" style={{ padding: 5 }} />
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
});
