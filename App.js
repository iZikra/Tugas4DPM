import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Alert, TouchableOpacity } from "react-native";

const App = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const teamA = "Tim A";
  const teamB = "Tim B";

  const addScoreA = () => {
    setScoreA(scoreA + 1);
  };

  const subtractScoreA = () => {
    if (scoreA > 0) {
      setScoreA(scoreA - 1);
    }
  };

  const addScoreB = () => {
    setScoreB(scoreB + 1);
  };

  const subtractScoreB = () => {
    if (scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  const checkWinner = () => {
    if (scoreA >= 10) {
      Alert.alert(`${teamA} Menang!`);
      resetScores();
    } else if (scoreB >= 10) {
      Alert.alert(`${teamB} Menang!`);
      resetScores();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {teamA} vs {teamB}
      </Text>
      <View style={styles.scoreContainer}>
        <Text style={[styles.score, styles.scoreA]}>{scoreA}</Text>
        <Text style={[styles.score, styles.scoreB]}>{scoreB}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.teamContainer}>
          <Text style={[styles.teamName, styles.teamAName]}>{teamA}</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={[styles.button, styles.buttonAdd]}
              onPress={() => {
                addScoreA();
                checkWinner();
              }}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonSubtract]}
              onPress={subtractScoreA}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.teamContainer}>
          <Text style={[styles.teamName, styles.teamBName]}>{teamB}</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={[styles.button, styles.buttonAdd]}
              onPress={() => {
                addScoreB();
                checkWinner();
              }}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonSubtract]}
              onPress={subtractScoreB}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F8FF",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    color: "black",
    textAlign: "center",
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 30,
  },
  score: {
    fontSize: 60,
    fontWeight: "bold",
    padding: 20,
    borderRadius: 15,
    textAlign: "center",
    elevation: 5,
  },
  scoreA: {
    backgroundColor: "violet",
    color: "black",
  },
  scoreB: {
    backgroundColor: "violet",
    color: "black",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  teamContainer: {
    alignItems: "center",
    marginHorizontal: 20,
  },
  teamName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  teamAName: {
    color: "blue",
  },
  teamBName: {
    color: "red",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 120,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonAdd: {
    backgroundColor: "maroon",
  },
  buttonSubtract: {
    backgroundColor: "#FF4500",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  resetButton: {
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: "gold",
    borderRadius: 10,
    elevation: 3,
  },
  resetButtonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;
