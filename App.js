import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const goalOutputHandler = (goal) => {
    setGoalsList((currentGoals) => [
      ...goalsList,
      { id: Math.random().toString(), text: goal },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setGoalsList(currentGoals => {
        return currentGoals.filter((goal) => goalId !== goal.id)
    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode('false');
  }

  return (
    <View style={styles.screen}>
      <Button title="Add Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onCancel={cancelGoalAdditionHandler} onAddGoal={goalOutputHandler} />
      <FlatList
        data={goalsList}
        keyExtractor={(item, index) => item.id}
        renderItem={(itemData) => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} text={itemData.item.text} />}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
