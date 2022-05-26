//Imports -- Build-in
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
//Imports --  Custom
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

//Global Functions to Generate Random Number in Some Range
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;
//GameScreen Component
const GameScreen = ({ onGameOver, userNumber }) => {
  //Variables
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  //UseStates
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState([initialGuess]);
  //useWindowDimensions
  const { height, width } = useWindowDimensions();
  //useEffect
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(rounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    let minBoundary = 1;
    let maxBoundary = 100;
  }, []);

  //Functions
  function nextGuessHandler(direction) {
    // direction => 'lower', 'greater'
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setRounds((currentValue) => [newRndNumber, ...currentValue]);
  }
  const roundslength = rounds.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.InstructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsConatiner}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onMyPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="#fff" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onMyPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="#fff" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        {/* {rounds.map((round) => {
          return <Text key={round}>{round}</Text>;
        })} */}
        <FlatList
          data={rounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={roundslength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 12,
    alignItems: "center",
  },
  buttonsConatiner: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  InstructionText: {
    marginBottom: 24,
  },
  listContainer: {
    flex: 1,
    padding: 25,
  },
  buttonsContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
});
