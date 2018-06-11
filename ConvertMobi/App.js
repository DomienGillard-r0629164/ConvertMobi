import React from 'react';
import { Component } from 'react';
import { Dimensions, StyleSheet, SectionList, Text, View, Button, Alert, TextInput, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { UnitCollection } from './Model';

export class NavScreen extends React.Component {
  render() {
    return (
      <View style={styles.secnav}>
        <View style={styles.nav}>
          <View style={styles.subnav}>
            <View style={styles.navbutton}>
              <Button title="Length Converter" onPress={() => this.goToConverter('Length')} />
            </View>
            <View style={styles.navbutton}>
              <Button title="Area Converter" onPress={() => this.goToConverter('Area')}/>
            </View>
            <View style={styles.navbutton}>
              <Button title="Mass Converter" onPress={() => this.goToConverter('Mass')} />
            </View>
            <View style={styles.navbutton}>
              <Button title="Temperature Converter" onPress={() => this.goToConverter('Temperature')}/>
            </View>
          </View>
          <View style={styles.subnav}>
            <View style={styles.navbutton}>
              <Button title="Time Converter" onPress={() => this.goToConverter('Time')}/>
            </View>
            <View style={styles.navbutton}>
              <Button title="Volume Converter" onPress={() => this.goToConverter('Volume')}/>
            </View>
            <View style={styles.navbutton}>
              <Button title="Force Converter" onPress={() => this.goToConverter('Force')}/>
            </View>
            <View style={styles.navbutton}>
              <Button title="Speed Converter" onPress={() => this.goToConverter('Speed')}/>
            </View>
          </View>
        </View>
        <View style={styles.navbutton}>
          <Button title="Custom Converter" onPress={() => this.goToConverter('CustomConverter')}/>
        </View>
      </View>
    );
  }

  goToConverter(converter){
    this.props.navigation.navigate(converter);
  }

}

export class CustomConverterScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = { unit1: "length", unit2: "time", units: ["length", "time", "mass"] }
  }

  render(){   
    let me = this;

    function isValidCombination(unit1, unit2)
    {
      if(unit1 == "length" && unit2 == "time"){
        return true;
      }else if(unit1 == "mass" && unit2 == "length"){
        return true;
      }else{
        return false;
      }
    }

    const canConvert = isValidCombination(this.state.unit1, this.state.unit2);

    return (
      <View>
        <View>
        <Picker selectedValue={this.state.unit1} onValueChange={(itemValue, itemIndex) => { this.setState({unit1: itemValue})} }>
            {Object.keys(this.state.units).map((key) => {
              return (<Picker.Item key={key} label={this.state.units[key]} value={this.state.units[key]}/>)
            })}
          </Picker>
          <Picker selectedValue={this.state.unit2} onValueChange={(itemValue, itemIndex) => this.setState({unit2: itemValue})}>
            {Object.keys(this.state.units).map((key) => {
              return (<Picker.Item key={key} label={this.state.units[key]} value={this.state.units[key]}/>)
            })}
          </Picker>
          <Button title="Build converter" onPress={() => this.goToConverter()} disabled={!canConvert}/>
          
          <View style={styles.textBlock}>
            <Text>Speed = length / time</Text>  
            <Text>Linear density = mass / length</Text>
          </View>
        
        </View>
      </View>
    )
  }

  goToConverter(){
    destination = "";
    if(this.state.unit1 == "length" && this.state.unit2 == "time"){
      destination = "CustomSpeed";
    }else if(this.state.unit1 == "mass" && this.state.unit2 == "length"){
      destination = "CustomLinearDensity";
    }
    this.props.navigation.navigate(destination);
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
              return (<Picker.Item key={key} label={key} value={key}/>)
            })}
          </Picker>
          <Picker selectedValue={this.state.rightUnit} onValueChange={(itemValue, itemIndex) => this.setState({rightUnit: itemValue})}>
            {Object.keys(this.state.units).map((key) => {
              return (<Picker.Item key={key} label={key} value={key}/>)
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

export class CustomConverter extends React.Component {
  constructor(props)
  {
    super(props);

    const leftValue = 0;
    const rightValue = 0;
    const result = 0;
    const leftUnit1 = "meters";
    const rightUnit1 = "seconds";
    const leftUnit2 = "meters";
    const rightUnit2 = "seconds";
    const leftUnitList = [];
    const rightUnitList = [];

    this.state = { leftValue, rightValue, result, leftUnit1, rightUnit1, leftUnit2, rightUnit2, leftUnitList, rightUnitList }

  }

  render() {
    let me = this;

    function isValidNumber(s)
    {
      return !!/^\d+(\.\d*)?$/.exec(s);
    }

    const canConvert = isValidNumber(this.state.leftValue);

    return (
      <View>
        <View>
        <TextInput value={"" + this.state.leftValue} onChangeText={(s) => this.setState({leftValue: s})} keyboardType='numeric'/>
          <View style={styles.inline}>
            <Picker style={styles.leftPicker} selectedValue={this.state.leftUnit1} onValueChange={(itemValue, itemIndex) => this.setState({leftUnit1: itemValue})}>
              {Object.keys(this.state.leftUnitList).map((key) => {
                return (<Picker.Item key={key} label={key} value={key}/>)
              })}
            </Picker>
            <Text>/</Text>
            <Picker style={styles.rightPicker} selectedValue={this.state.rightUnit1} onValueChange={(itemValue, itemIndex) => this.setState({rightUnit1: itemValue})}>
              {Object.keys(this.state.rightUnitList).map((key) => {
                  return (<Picker.Item key={key} label={key} value={key}/>)
                })}
            </Picker>
          </View>
        </View>
        <View>
          <View style={styles.inline}>
            <Picker style={styles.leftPicker} selectedValue={this.state.leftUnit2} onValueChange={(itemValue, itemIndex) => this.setState({leftUnit2: itemValue})}>
              {Object.keys(this.state.leftUnitList).map((key) => {
                return (<Picker.Item key={key} label={key} value={key}/>)
              })}
            </Picker>
            <Text>/</Text>
            <Picker style={styles.rightPicker} selectedValue={this.state.rightUnit2} onValueChange={(itemValue, itemIndex) => this.setState({rightUnit2: itemValue})}>
              {Object.keys(this.state.rightUnitList).map((key) => {
                  return (<Picker.Item key={key} label={key} value={key}/>)
                })}
            </Picker>
          </View>
          <Text>{this.state.result}</Text>
          <Button title="Convert" onPress={() => this.convert()} disabled={!canConvert} />
        </View>
      </View>
    );
  }

  convert() {

    const { factor: leftFromVal } = this.state.leftUnitList[this.state.leftUnit1];
    const { factor: leftToVal } = this.state.leftUnitList[this.state.leftUnit2];
    const { factor: rightFromVal } = this.state.rightUnitList[this.state.rightUnit1];
    const { factor: rightToVal } = this.state.rightUnitList[this.state.rightUnit2];

    var firstPart = leftFromVal / rightFromVal;
    var secondPart = leftToVal / rightToVal;

    var res = firstPart / secondPart;

    var r = this.state.leftValue * res;

    this.setState({result: r});

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

export class CustomSpeedConverter extends CustomConverter {
  constructor(props){
    super(props);

    const leftValue = 0;
    const rightValue = 0;
    const result = 0;
    const leftUnit1 = "meters";
    const rightUnit1 = "seconds";
    const leftUnit2 = "meters";
    const rightUnit2 = "seconds";
    const leftUnitList = this.createLeftUnits();
    const rightUnitList = this.createRightUnits();

    this.state = { leftValue, rightValue, result, leftUnit1, rightUnit1, leftUnit2, rightUnit2, leftUnitList, rightUnitList } 
  }

  createLeftUnits(){
    return new UnitCollection().lengths;
  }

  createRightUnits(){
    return new UnitCollection().times;
  }
}

export class CustomLinearDensityConverter extends CustomConverter {
  constructor(props){
    super(props);

    const leftValue = 0;
    const rightValue = 0;
    const result = 0;
    const leftUnit1 = "grams";
    const rightUnit1 = "centimeters";
    const leftUnit2 = "grams";
    const rightUnit2 = "centimeters";
    const leftUnitList = this.createLeftUnits();
    const rightUnitList = this.createRightUnits();

    this.state = { leftValue, rightValue, result, leftUnit1, rightUnit1, leftUnit2, rightUnit2, leftUnitList, rightUnitList } 
  }

  createLeftUnits(){
    return new UnitCollection().mass;
  }

  createRightUnits(){
    return new UnitCollection().lengths;
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
    CustomConverter: {screen: CustomConverterScreen},
    CustomSpeed: {screen: CustomSpeedConverter},
    CustomLinearDensity: {screen: CustomLinearDensityConverter}
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
  secnav: {
    flexDirection: 'column',
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
  },
  textBlock: {
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
