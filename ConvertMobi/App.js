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
    this.state = { /*leftValue: 1,*/ rightValue: 1, result: 0, leftUnit: "kg", rightUnit: "kg", units: [
      ["carats (metric)", "CD", 0.0002],
      ["cental", "", 45.359237],
      ["decagrams", "dag", 0.01],
      ["femtograms", "fg", 1e-18],
      ["grains", "gr", 0.00006479891],
      ["grams", "g", 1e-3],
      ["hectograms", "hg", 0.1],
      ["hundredweights", "cwt", 50.80234544],
      ["kilograms", "kg", 1],
      ["kilotonnes", "kt", 1e6],
      ["megatonnes", "Mt", 1e9],
      ["micrograms", "Âµg", 1e-9],
      ["milligrams", "mg", 1e-6],
      ["nanograms", "ng", 1e-12],
      ["ounces (US & UK)", "oz", 0.028349523125],
      ["pounds (US & UK)", "lbs", 0.45359237],
      ["stones", "st", 6.35029318],
      ["tonnes (metric)", "t", 1000]
      ]
    }
  }

  render() {
    return (
      <View>
        <View>
          <Button title="Distance Converter" onPress={() => this.goToDistanceConverter()} />
        </View>
        <View>
          <TextInput onChangeText={(leftValue) => this.setState({leftValue})} keyboardType='numeric'/>
          <Picker selectedValue={this.state.leftUnit} onValueChange={(itemValue, itemIndex) => this.setState({leftUnit: itemValue})}>
            <Picker.Item label="Kilogram" value="kg"/>
            <Picker.Item label="Pound" value="lbs"/>
          </Picker>
          <Picker selectedValue={this.state.rightUnit} onValueChange={(itemValue, itemIndex) => this.setState({rightUnit: itemValue})}>
            <Picker.Item label="Kilogram" value="kg"/>
            <Picker.Item label="Pound" value="lbs"/>
          </Picker>
          <Text>{this.state.result}</Text>
          <Button title="Convert" onPress={() => this.convert()} />
        </View>
      </View>
    );
  }

  convert() {
    var toVal = 0;
    var fromVal = 0;
    for(var i = 0; i < this.state.units.length; i++){
      if(this.state.units[i][1] == this.state.rightUnit){
        toVal = parseFloat(this.state.units[i][2]);
      }
      if(this.state.units[i][1] == this.state.leftUnit){
        fromVal = parseFloat(this.state.units[i][2]);
      }
    }
    this.setState({result: parseFloat((this.state.leftValue * fromVal) / toVal)});
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