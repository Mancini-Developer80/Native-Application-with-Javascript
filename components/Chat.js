import { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

const Chat = ({ route, navigation }) => {
  // This component is used to display the chat screen
  // It receives the name and color as parameters from the Start screen
  const { name, color } = route.params;

  useEffect(() => {
    // This effect runs when the component mounts and sets the title of the navigation bar
    // to the name passed from the Start screen
    navigation.setOptions({ title: name });
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.text}>Welcome to the Chat, {name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});

export default Chat;
