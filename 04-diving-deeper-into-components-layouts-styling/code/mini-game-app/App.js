//Imports -- Built In
import React, { useState } from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
//Imports -- Custom
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/color";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

//App Component
function App() {
  //UseStates
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);
  const [rounds, setRounds] = useState(0);

  //Font-Load
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  //Functions
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  }
  function gameOverHandler(numberOfRounds) {
    setIsGameOver(true);
    setRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setRounds(0);
  }

  //App Logic to Render Different Screens
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (isGameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={rounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }
  //App Component JSX
  return (
    <View style={styles.rootScreen}>
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
      <StatusBar style="light" />
    </View>
  );
}
export default App;

//StyleSheet
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  },
});
