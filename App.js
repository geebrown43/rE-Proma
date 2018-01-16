import React from "react";
import { StyleSheet, Text, View} from "react-native";
import { Font } from "expo";
import Button from 'react-native-button'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      fontLoaded: false,
      buttonLoaded: true
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      satisfy: require("./assets/fonts/Satisfy-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded ? (
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.title}>RE</Text>
            <Text style={{ color: "white", fontSize: 40 }}> | Proma </Text>
          </View>
        ) : null}
        {this.state.buttonLoaded ? <Button containerStyle={{backgroundColor:'white', height: 45, padding: 10, borderRadius: 20}} disabledContainerStyle={{backgroundColor: 'grey'}} style={{fontSize:20}} onPress={() => this.setState({buttonLoaded:false, fontLoaded: false})}>Welcome</Button> :null }          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#3232ff`,
    alignItems: "center",
    justifyContent: "space-around"
  },
  title: {
    color: "white",
    fontSize: 56,
    fontFamily: "satisfy"
  },
  button: {
    borderRadius: 10,
    height: 20,
    width: 100,
    backgroundColor: 'white',
    borderRadius: 10
  }
});
