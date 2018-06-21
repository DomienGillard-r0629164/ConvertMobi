import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { UnitCollection } from './Model';

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
  custombutton: {
    marginTop: 0,
    marginBottom: 100,
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
  margins: {
    marginBottom: 10,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

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
        <View style={styles.custombutton}>
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

    this.state = { unit1: "length", unit2: "time", units: ["length", "time", "mass", "force", "volume", "area", "speed"] }
    
  }

  render(){
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
          <Button title="Build converter" onPress={() => this.goToConverter()}/>        
        </View>
      </View>
    )
  }

  goToConverter(){
    this.props.navigation.navigate("Custom", {leftUnit: this.state.unit1, rightUnit: this.state.unit2});
  }
}

export class Converter extends React.Component {
  constructor(props)
  {
    super(props);

    const units = [];
    const leftValue = 0;
    const rightValue = 0;
    const rounding = 5;
    const leftUnit = "kN";
    const rightUnit = "kN";
    const combinable = true;

    this.state = { leftValue, rightValue, rounding, leftUnit, rightUnit, units, combinable }
  }

  render() {
    let me = this;

    function isValidNumber(s)
    {
      return !!/^\d+(\.\d*)?$/.exec(s);
    }

    function isValidInteger(s)
    {
      return ((!!/^\d+$/.exec(s) && s <= 12) || s == "");
    }

    const canConvert = (isValidNumber(this.state.leftValue) && isValidInteger(this.state.rounding));

    return (
      <View>
        <View>
          <View style={[styles.inline, styles.center]}>
            <TextInput style={[{width: 100}, styles.margins]} value={"" + this.state.leftValue} onChangeText={(s) => this.setState({leftValue: s})} keyboardType='numeric'/>
            <Text>{this.state.leftUnit}</Text>
          </View>
          <View style={[styles.inline, styles.center]}>
            <TextInput style={[{width: 100}, styles.margins]} value={"" + this.state.rounding} onChangeText={(s) => this.setState({rounding: s})} keyboardType='numeric'/>
            <Text>Decimals (0-12)</Text>
          </View>
          <Picker selectedValue={this.state.leftUnit} onValueChange={(itemValue, itemIndex) => { this.setState({leftUnit: itemValue})} }>
            {Object.keys(this.state.units).map((key) => {
              return (<Picker.Item key={key} label={key} value={key}/>)
            })}
          </Picker>
          <Picker style={styles.margins} selectedValue={this.state.rightUnit} onValueChange={(itemValue, itemIndex) => this.setState({rightUnit: itemValue})}>
            {Object.keys(this.state.units).map((key) => {
              return (<Picker.Item key={key} label={key} value={key}/>)
            })}
          </Picker>
          <View style={styles.center}>
            <Text style={styles.margins} >{this.state.rightValue} {this.state.rightUnit}</Text>
          </View>
          <Button title="Convert" onPress={() => this.convert()} disabled={!canConvert} />
        </View>
      </View>
    );
  }

  convert() {
    const { factor: fromValFactor } = this.state.units[this.state.leftUnit];
    const { factor: toValFactor } = this.state.units[this.state.rightUnit];
    const endValue = this.state.leftValue * fromValFactor / toValFactor;
    if (this.state.rounding == null) {
      this.setState({rightValue: ((this.state.leftValue * fromValFactor) / toValFactor)});
    } else {
      this.setState({rightValue: ((this.state.leftValue * fromValFactor) / toValFactor).toFixed(this.state.rounding)});
    }
  }
}

export class CustomConverter extends React.Component {
  constructor(props)
  {
    super(props);

    const leftValue = 0;
    const rightValue = 0;
    const rounding = 5;
    const result = 0;
    const leftUnit1 = this.fillLeftUnit();
    const rightUnit1 = this.fillRightUnit();
    const leftUnit2 = this.fillLeftUnit();
    const rightUnit2 = this.fillRightUnit();
    const leftUnitList = this.createLeftUnitList();
    const rightUnitList = this.createRightUnitList();

    this.state = { leftValue, rightValue, rounding, result, leftUnit1, rightUnit1, leftUnit2, rightUnit2, leftUnitList, rightUnitList }
  }

  createLeftUnitList(){
    param = this.props.navigation.getParam("leftUnit");
    if(param == "length"){
      return new UnitCollection().lengths;
    }else if(param == "time"){
      return new UnitCollection().times;
    }else if(param == "mass"){
      return new UnitCollection().mass;
    }else if(param == "force"){
      return new UnitCollection().forces;
    }else if(param == "volume"){
      return new UnitCollection().volumes;
    }else if(param == "area"){
      return new UnitCollection().areas;
    }else if(param == "speed"){
      return new UnitCollection().speeds;
    }
  }

  createRightUnitList(){
    param = this.props.navigation.getParam("rightUnit");
    if(param == "length"){
      return new UnitCollection().lengths;
    }else if(param == "time"){
      return new UnitCollection().times;
    }else if(param == "mass"){
      return new UnitCollection().mass;
    }else if(param == "force"){
      return new UnitCollection().forces;
    }else if(param == "volume"){
      return new UnitCollection().volumes;
    }else if(param == "area"){
      return new UnitCollection().areas;
    }else if(param == "speed"){
      return new UnitCollection().speeds;
    }
  }

  fillLeftUnit(){
    param = this.props.navigation.getParam("leftUnit");
    if(param == "length"){
      return "meters";
    }else if(param == "time"){
      return "seconds";
    }else if(param == "mass"){
      return "grams";
    }else if(param == "force"){
      return "newtons";
    }else if(param == "volume"){
      return "liters";
    }else if(param == "area"){
      return "square centimeters";
    }else if(param == "speed"){
      return "meters/second";
    }
  }

  fillRightUnit(){
    param = this.props.navigation.getParam("rightUnit");
    if(param == "length"){
      return "meters";
    }else if(param == "time"){
      return "seconds";
    }else if(param == "mass"){
      return "grams";
    }else if(param == "force"){
      return "newtons";
    }else if(param == "volume"){
      return "liters";
    }else if(param == "area"){
      return "square centimeters";
    }else if(param == "speed"){
      return "meters/second";
    }
  }

  render() {
    let me = this;

    function isValidNumber(s)
    {
      return !!/^\d+(\.\d*)?$/.exec(s);
    }
    function isValidInteger(s)
    {
      return ((!!/^\d+$/.exec(s) && s <= 12) || s == "");
    }

    const canConvert = (isValidNumber(this.state.leftValue) && isValidInteger(this.state.rounding));

    return (
      <View>
        <View>   
          <View style={[styles.inline, styles.center]}>
            <TextInput style={{width: 100}} value={"" + this.state.leftValue} onChangeText={(s) => this.setState({leftValue: s})} keyboardType='numeric'/>
            <Text>{this.state.leftUnit1}/{this.state.rightUnit1}</Text>
          </View>
          <View style={[styles.inline, styles.center]}>
            <TextInput style={[{width: 100}, styles.margins]} value={"" + this.state.rounding} onChangeText={(s) => this.setState({rounding: s})} keyboardType='numeric'/>
            <Text>Decimals (0-12)</Text>
          </View> 
          <View style={styles.inline}>
            <Picker style={styles.leftPicker} selectedValue={this.state.leftUnit1} onValueChange={(itemValue, itemIndex) => this.setState({leftUnit1: itemValue})}>
              {Object.keys(this.state.leftUnitList).map((key) => {
                return (<Picker.Item key={key} label={key} value={key}/>)
              })}
            </Picker>
            <Text style={{marginTop: 30}}>/</Text>
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
            <Text style={{marginTop: 30}}>/</Text>
            <Picker style={styles.rightPicker} selectedValue={this.state.rightUnit2} onValueChange={(itemValue, itemIndex) => this.setState({rightUnit2: itemValue})}>
              {Object.keys(this.state.rightUnitList).map((key) => {
                  return (<Picker.Item key={key} label={key} value={key}/>)
                })}
            </Picker>
          </View>
          <View style={styles.center}>
            <Text style={styles.margins}>{this.state.result} {this.state.leftUnit2}/{this.state.rightUnit2}</Text>
          </View>
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
    if (this.state.rounding == null) {
      this.setState({result: r});
    } else {
      this.setState({result: (r).toFixed(this.state.rounding)});
    }
    

  }
}

export class AreaConverter extends Converter {
  constructor(props)
  {
    super(props);
    
    const units = this.createUnits();
    const leftValue = 0;
    const rightValue = 0;
    const rounding = 5;
    const leftUnit = "square centimeters";
    const rightUnit = "square centimeters";
    const combinable = true;

    this.state = { leftValue, rightValue, rounding, leftUnit, rightUnit, units, combinable }
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
    const rounding = 5;
    const leftUnit = "centimeters";
    const rightUnit = "centimeters";
    const combinable = true;

    this.state = { leftValue, rightValue, rounding, leftUnit, rightUnit, units, combinable }
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
    const rounding = 5;
    const leftUnit = "kilograms";
    const rightUnit = "kilograms";
    const combinable = true;

    this.state = { leftValue, rightValue, rounding, leftUnit, rightUnit, units, combinable }
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
    const rounding = 5;
    const leftUnit = "minutes";
    const rightUnit = "minutes";
    const combinable = true;

    this.state = { leftValue, rightValue, rounding, leftUnit, rightUnit, units, combinable }
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
    const rounding = 5;
    const leftUnit = "kilometers/hour";
    const rightUnit = "kilometers/hour";
    const combinable = true;

    this.state = { leftValue, rightValue, rounding, leftUnit, rightUnit, units, combinable }
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
    const rounding = 5;
    const leftUnit = "kilonewtons";
    const rightUnit = "kilonewtons";
    const combinable = true;

    this.state = { leftValue, rightValue, rounding, leftUnit, rightUnit, units, combinable }
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
    const rounding = 5;
    const leftUnit = "liters";
    const rightUnit = "liters";
    const combinable = true;

    this.state = { leftValue, rightValue, rounding, leftUnit, rightUnit, units, combinable }
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
    const rounding = 5;
    const leftUnit = "Kelvin";
    const rightUnit = "Kelvin";
    const combinable = false;
    
    this.state= { leftValue, rightValue, rounding, leftUnit, rightUnit, units, combinable };
  }

  createUnits()
  {
    return new UnitCollection().temperatures;
  }

  convert() {
    const { factor: fromValFactor, constant: fromValTerm } = this.state.units[this.state.leftUnit];
    const { factor: toValFactor, constant: toValTerm } = this.state.units[this.state.rightUnit];
    
    let inKelvin = (parseFloat(this.state.leftValue) + fromValTerm) * fromValFactor;
    if (this.state.rounding == null) {
      this.setState({rightValue: (inKelvin / toValFactor) - toValTerm});
    } else {
      this.setState({rightValue: ((inKelvin / toValFactor) - toValTerm).toFixed(this.state.rounding)});
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
    Custom: {screen: CustomConverter},
    CustomConverter: {screen: CustomConverterScreen}
});


