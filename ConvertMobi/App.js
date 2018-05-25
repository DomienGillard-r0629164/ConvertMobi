import React from 'react';
import { Component } from 'react';
import { Dimensions, StyleSheet, SectionList, Text, View, Button, Alert, TextInput, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {UnitCollection} from './Model';

export class NavScreen extends React.Component {
  render() {
    return (
      <View style={styles.nav}>
        <View style={styles.subnav}>
          <View style={styles.navbutton}>
            <Button title="Length Converter" onPress={() => this.goToLengthConverter()} />
          </View>
          <View style={styles.navbutton}>
            <Button title="Area Converter" onPress={() => this.goToAreaConverter()}/>
          </View>
          <View style={styles.navbutton}>
            <Button title="Mass Converter" onPress={() => this.goToMassConverter()} />
          </View>
          <View style={styles.navbutton}>
            <Button title="Temperature Converter" onPress={() => this.goToTemperatureConverter()}/>
          </View>
        </View>
        <View style={styles.subnav}>
          <View style={styles.navbutton}>
            <Button title="Time Converter" onPress={() => this.goToTimeConverter()}/>
          </View>
          <View style={styles.navbutton}>
            <Button title="Volume Converter" onPress={() => this.goToVolumeConverter()}/>
          </View>
          <View style={styles.navbutton}>
            <Button title="Force Converter" onPress={() => this.goToForceConverter()}/>
          </View>
          <View style={styles.navbutton}>
            <Button title="Speed Converter" onPress={() => this.goToSpeedConverter()}/>
          </View>
        </View>
        <View style={styles.subnav}>
          <View style={styles.navbutton}>
            <Button title="Speed Extra Converter" onPress={() => this.goToSpeedExtraConverter()}/>
          </View>
          <View style={styles.navbutton}>
            <Button title="Converter" onPress={() => this.goToVolumeConverter()}/>
          </View>
          <View style={styles.navbutton}>
            <Button title="Converter" onPress={() => this.goToForceConverter()}/>
          </View>
          <View style={styles.navbutton}>
            <Button title="Converter" onPress={() => this.goToSpeedConverter()}/>
          </View>
        </View>
      </View>
    );
  }

  goToAreaConverter(){
    this.props.navigation.navigate('Area');
  }

  goToLengthConverter(){
    this.props.navigation.navigate('Length');
  }

  goToMassConverter(){
    this.props.navigation.navigate('Mass');
  }

  goToTimeConverter(){
    this.props.navigation.navigate('Time');
  }

  goToSpeedConverter(){
    this.props.navigation.navigate('Speed');
  }

  goToForceConverter(){
    this.props.navigation.navigate('Force');
  }

  goToSpeedExtraConverter(){
    this.props.navigation.navigate('SpeedExtra');
  }

  goToTemperatureConverter(){
    this.props.navigation.navigate('Temperature');
  }

  goToVolumeConverter(){
    this.props.navigation.navigate('Volume');
  }

}

export class Converter extends React.Component {
  constructor(props)
  {
    super(props);

    const units = [];
    const leftValue = 0;
    const rightValue = 0;
    const leftUnit = "kN";
    const rightUnit = "kN";
    const combinable = true;

    this.state = { leftValue, rightValue, leftUnit, rightUnit, units, combinable }
  }

  render() {
    let me = this;

    function isValidNumber(s)
    {
      return !!/^\d+(\.\d*)?$/.exec(s);
    }

    console.log(`render(): this.state.leftValue = ${this.state.leftValue}`);

    const canConvert = isValidNumber(this.state.leftValue);

    return (
      <View>
        <View>
          <TextInput value={"" + this.state.leftValue} onChangeText={(s) => this.setState({leftValue: s})} keyboardType='numeric'/>
          <Picker selectedValue={this.state.leftUnit} onValueChange={(itemValue, itemIndex) => { this.setState({leftUnit: itemValue})} }>
            {Object.keys(this.state.units).map((key) => {
              return (<Picker.Item label={key} value={key}/>)
            })}
          </Picker>
          <Picker selectedValue={this.state.rightUnit} onValueChange={(itemValue, itemIndex) => this.setState({rightUnit: itemValue})}>
            {Object.keys(this.state.units).map((key) => {
              return (<Picker.Item label={key} value={key}/>)
            })}
          </Picker>
          <Text>{this.state.rightValue}</Text>
          <Button title="Convert" onPress={() => this.convert()} disabled={!canConvert} />
        </View>
      </View>
    );
  }

  convert() {
    const { factor: fromValFactor } = this.state.units[this.state.leftUnit];
    const { factor: toValFactor } = this.state.units[this.state.rightUnit];
    
    this.setState({rightValue: (this.state.leftValue * fromValFactor) / toValFactor});
  }
}

export class AreaConverter extends Converter {
  constructor(props)
  {
    super(props);
    
    const units = this.createUnits();
    const leftValue = 0;
    const rightValue = 0;
    const leftUnit = "square centimeters";
    const rightUnit = "square centimeters";
    const combinable = true;

    this.state = { leftValue, rightValue, leftUnit, rightUnit, units, combinable }
  }

  createUnits()
  {
    return new UnitCollection().areas;
  }
}

export class LengthConverter extends Converter {
  constructor(props)
  {
    super(props);
    
    const units = this.createUnits();
    const leftValue = 0;
    const rightValue = 0;
    const leftUnit = "centimeters";
    const rightUnit = "centimeters";
    const combinable = true;

    this.state = { leftValue, rightValue, leftUnit, rightUnit, units, combinable }
  }

  createUnits()
  {
    return new UnitCollection().lengths;
  }

}

export class MassConverter extends Converter {
  constructor(props)
  {
    super(props);
    
    const units = this.createUnits();
    const leftValue = 0;
    const rightValue = 0;
    const leftUnit = "kilograms";
    const rightUnit = "kilograms";
    const combinable = true;

    this.state = { leftValue, rightValue, leftUnit, rightUnit, units, combinable }
  }

  createUnits()
  {
    return new UnitCollection().mass;
  }

}

export class TimeConverter extends Converter {
  constructor(props)
  {
    super(props);
    
    const units = this.createUnits();
    const leftValue = 0;
    const rightValue = 0;
    const leftUnit = "minutes";
    const rightUnit = "minutes";
    const combinable = true;

    this.state = { leftValue, rightValue, leftUnit, rightUnit, units, combinable }
  }

  createUnits()
  {
    return new UnitCollection().times;
  }

}

export class SpeedConverter extends Converter {
  constructor(props)
  {
    super(props);
    
    const units = this.createUnits();
    const leftValue = 0;
    const rightValue = 0;
    const leftUnit = "kilometers/hour";
    const rightUnit = "kilometers/hour";
    const combinable = true;

    this.state = { leftValue, rightValue, leftUnit, rightUnit, units, combinable }
  }

  createUnits()
  {
    return new UnitCollection().speeds;
  }

}

export class ForceConverter extends Converter {
  constructor(props)
  {
    super(props);

    const units = this.createUnits();
    const leftValue = 0;
    const rightValue = 0;
    const leftUnit = "kilonewtons";
    const rightUnit = "kilonewtons";
    const combinable = true;

    this.state = { leftValue, rightValue, leftUnit, rightUnit, units, combinable }
  }
  
  createUnits()
  {
    return new UnitCollection().forces;
  }

}

export class VolumeConverter extends Converter {
  constructor(props)
  {
    super(props);

    const units = this.createUnits();
    const leftValue = 0;
    const rightValue = 0;
    const leftUnit = "liters";
    const rightUnit = "liters";
    const combinable = true;

    this.state = { leftValue, rightValue, leftUnit, rightUnit, units, combinable }
  }
  
  createUnits()
  {
    return new UnitCollection().volumes;
  }

}

export class TemperatureConverter extends Converter {
  constructor(props)
  {
    super(props);

    const units = this.createUnits();
    const leftValue = 0;
    const rightValue = 0;
    const leftUnit = "Kelvin";
    const rightUnit = "Kelvin";
    const combinable = false;
    
    this.state= { leftValue, rightValue, leftUnit, rightUnit, units, combinable };
  }

  createUnits()
  {
    return new UnitCollection().temperatures;
  }

  convert() {
    const { factor: fromValFactor, constant: fromValTerm } = this.state.units[this.state.leftUnit];
    const { factor: toValFactor, constant: toValTerm } = this.state.units[this.state.rightUnit];
    
    let inKelvin = (parseFloat(this.state.leftValue) + fromValTerm) * fromValFactor;
    this.setState({rightValue: (inKelvin / toValFactor) - toValTerm});
  }

}

export class ExtraSpeedConverter extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = { rightValue: 1, result: 0, leftUnit1: "m", rightUnit1: "sec", leftUnit2: "m", rightUnit2: "sec", 
      leftUnitList: [
        ["centimeters", "cm", 0.01], 
        ["feet",        "ft", 0.3048],
        ["inches",      "in", 0.0254], 
        ["kilometers",  "km", 1000], 
        ["meters",      "m",  1], 
        ["miles",       "mi", 1609.344], 
        ["yards",       "yd", 0.9144]
      ],  
      rightUnitList: [ 
        ["seconds", "sec", 1],
        ["minutes", "min", 60], 
        ["hours",   "h",   3600]
      ]
    }
  }

  render() {
    return (
      <View>
        <View>
        <TextInput onChangeText={(leftValue) => this.setState({leftValue})} keyboardType='numeric'/>
          <View style={styles.inline}>
            <Picker style={styles.leftPicker} selectedValue={this.state.leftUnit1} onValueChange={(itemValue, itemIndex) => this.setState({leftUnit1: itemValue})}>
              {Object.keys(this.state.leftUnitList).map((key) => {
                return (<Picker.Item key={this.state.leftUnitList[key][0]} label={this.state.leftUnitList[key][0]} value={this.state.leftUnitList[key][1]}/>)
              })}
            </Picker>
            <Text>/</Text>
            <Picker style={styles.rightPicker} selectedValue={this.state.rightUnit1} onValueChange={(itemValue, itemIndex) => this.setState({rightUnit1: itemValue})}>
              {Object.keys(this.state.rightUnitList).map((key) => {
                  return (<Picker.Item key={this.state.rightUnitList[key][0]} label={this.state.rightUnitList[key][0]} value={this.state.rightUnitList[key][1]}/>)
                })}
            </Picker>
          </View>
        </View>
        <View>
          <View style={styles.inline}>
            <Picker style={styles.leftPicker} selectedValue={this.state.leftUnit2} onValueChange={(itemValue, itemIndex) => this.setState({leftUnit2: itemValue})}>
              {Object.keys(this.state.leftUnitList).map((key) => {
                return (<Picker.Item key={this.state.leftUnitList[key][0]} label={this.state.leftUnitList[key][0]} value={this.state.leftUnitList[key][1]}/>)
              })}
            </Picker>
            <Text>/</Text>
            <Picker style={styles.rightPicker} selectedValue={this.state.rightUnit2} onValueChange={(itemValue, itemIndex) => this.setState({rightUnit2: itemValue})}>
              {Object.keys(this.state.rightUnitList).map((key) => {
                  return (<Picker.Item key={this.state.rightUnitList[key][0]} label={this.state.rightUnitList[key][0]} value={this.state.rightUnitList[key][1]}/>)
                })}
            </Picker>
          </View>
          <Text>{this.state.result}</Text>
          <Button title="Convert" onPress={() => this.convert()} />
        </View>
      </View>
    );
  }

  convert() {
    var leftFromVal = 0
    var rightFromVal = 0;
    var leftToVal = 0
    var rightToVal = 0;
    for(var i = 0; i < this.state.leftUnitList.length; i++){
      if(this.state.leftUnitList[i][1] == this.state.leftUnit1){
        leftFromVal = parseFloat(this.state.leftUnitList[i][2]);
      }
      if(this.state.leftUnitList[i][1] == this.state.leftUnit2){
        leftToVal = parseFloat(this.state.leftUnitList[i][2]);
      }
    }
    for(var i = 0; i < this.state.rightUnitList.length; i++){
      if(this.state.rightUnitList[i][1] == this.state.rightUnit1){
        rightFromVal = parseFloat(this.state.rightUnitList[i][2]);
      }
      if(this.state.rightUnitList[i][1] == this.state.rightUnit2){
        rightToVal = parseFloat(this.state.rightUnitList[i][2]);
      }

      var firstPart = leftFromVal / rightFromVal;
      var secondPart = leftToVal / rightToVal;

      var res = firstPart / secondPart;

      var r = this.state.leftValue * res;

      this.setState({result: r});
    }
  }
}

export default App = StackNavigator({
    NavBar: {screen: NavScreen},
    Area: {screen: AreaConverter},
    Length: {screen: LengthConverter},
    Mass: {screen: MassConverter},
    Time: {screen: TimeConverter},
    Speed: {screen: SpeedConverter},
    Force: {screen: ForceConverter},
    Temperature: {screen: TemperatureConverter},
    Volume: {screen: VolumeConverter},
    SpeedExtra: {screen: ExtraSpeedConverter}
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
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  navbutton: {
    margin: 5,
    width: 120
  },
  leftPicker: {
    margin: 10,
    width: 150
  },
  rightPicker: {
    margin: 10,
    width: 150
  },
  inline: {
    flexDirection: 'row'
  }
});
