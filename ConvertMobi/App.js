import React from 'react';
import { Component } from 'react';
import { StyleSheet, SectionList, Text, View, Button, Alert, TextInput, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Converter extends Component {
    constructor(props) {
        super(props);
        this.state = { leftValue: 1, rightValue: 1 };
    }
}

export class DistanceConverter extends React.Component {
  render() {
    return (
      /*
      <View>
        <View style={styles.default}>
          <Converter text={"test"}>
          </Converter>
        </View>
        */
       <View>
        <View>
          <Button title="Mass Converter" onPress={() => this.goToMassConverter()} />
        </View>
        <View style={styles.leftward}>
          <Button
          title="meter"
          color="#000000"
          onPress={panic}
          />
          <Button
          title="yard"
          color="#000000"
          onPress={panic}
          />
        </View>
        
      </View>
    );
  }

  goToMassConverter(){
    this.props.navigation.navigate('Mass');
  }

}

export class MassConverter extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = { leftValue: 1, rightValue: 1, leftUnit: "kg", rightUnit: "kg" };
  }

  render() {
    return (
      <View>
        <View>
          <Button title="Distance Converter" onPress={() => this.goToDistanceConverter()} />
        </View>
        <View>
          <TextInput onChangeText={(leftValue) => this.setState(leftValue)}/>
          <Picker selectedValue={this.state.leftUnit} onValueChange={(itemValue, itemIndex) => this.setState({leftUnit: itemValue})}>
            <Picker.Item label="Kilogram" value="kg"/>
            <Picker.Item label="Pound" value="lbs"/>
          </Picker>
          <Picker selectedValue={this.state.rightUnit} onValueChange={(itemValue, itemIndex) => this.setState({rightUnit: itemValue})}>
            <Picker.Item label="Kilogram" value="kg"/>
            <Picker.Item label="Pound" value="lbs"/>
          </Picker>
          <Text>{this.state.rightValue}</Text>
        </View>
      </View>
    );
  }

  goToDistanceConverter(){
    this.props.navigation.navigate('Distance');
  }

}

export default App = StackNavigator({
    Distance: {screen: DistanceConverter},
    Mass: {screen: MassConverter}
});

const styles = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftward: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: 10,
  }
});

function convert() {
    return leftValue / rightValue;
}

function panic() {
    Alert.alert(
        'PANIC!!!',
        "Don't panic too hard though. You managed an alert, at least."
    )
}