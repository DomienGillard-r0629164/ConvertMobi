import React from 'react';
import { Component } from 'react';
import { Dimensions, StyleSheet, SectionList, Text, View, Button, Alert, TextInput, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Converter extends Component {
    constructor(props) {
        super(props);
        this.state = { leftValue: 1, rightValue: 1 };
    }
}

export class NavScreen extends React.Component {
  render() {
    return (
      <View style={styles.nav}>
        <View style={styles.subnav}>
          <View style={styles.navbutton}>
            <Button title="Distance Converter" onPress={() => this.goToDistanceConverter()} />
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
      </View>
    );
  }

  goToDistanceConverter(){
    this.props.navigation.navigate('Distance');
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

}

export class MassConverter extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = { /*leftValue: 1,*/ rightValue: 1, result: 0, leftUnit: "kg", rightUnit: "kg", units: [
      ["Carats (metric)", "CD", 0.0002],
      ["Cental", "", 45.359237],
      ["Decagrams", "dag", 0.01],
      ["Femtograms", "fg", 1e-18],
      ["Grains", "gr", 0.00006479891],
      ["Grams", "g", 1e-3],
      ["Hectograms", "hg", 0.1],
      ["Hundredweights", "cwt", 50.80234544],
      ["Kilograms", "kg", 1],
      ["Kilotonnes", "kt", 1e6],
      ["Megatonnes", "Mt", 1e9],
      ["Micrograms", "Âµg", 1e-9],
      ["Milligrams", "mg", 1e-6],
      ["Nanograms", "ng", 1e-12],
      ["Ounces (US & UK)", "oz", 0.028349523125],
      ["Pounds (US & UK)", "lbs", 0.45359237],
      ["Stones", "st", 6.35029318],
      ["Tonnes (metric)", "t", 1000]
      ]
    }
  }

  render() {
    return (
      <View>
        <View>
          <TextInput onChangeText={(leftValue) => this.setState({leftValue})} keyboardType='numeric'/>
          <Picker selectedValue={this.state.leftUnit} onValueChange={(itemValue, itemIndex) => this.setState({leftUnit: itemValue})}>
            {Object.keys(this.state.units).map((key) => {
              return (<Picker.Item label={this.state.units[key][0]} value={this.state.units[key][1]}/>)
            })}
          </Picker>
          <Picker selectedValue={this.state.rightUnit} onValueChange={(itemValue, itemIndex) => this.setState({rightUnit: itemValue})}>
            {Object.keys(this.state.units).map((key) => {
              return (<Picker.Item label={this.state.units[key][0]} value={this.state.units[key][1]}/>)
            })}
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

}

export class TimeConverter extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = { /*leftValue: 1,*/ rightValue: 1, result: 0, leftUnit: "h", rightUnit: "h", units: [
      ["centuries", "c", 3153600000],
      ["days", "d", 86400],
      ["decades", "de", 315360000],
      ["femtoseconds", "fs", 1e-15],
      ["fortnights", "fo", 1209600],
      ["hours", "h", 3600],
      ["microseconds", "μs", 1e-6],
      ["millenia", "mi", 31536000000],
      ["milliseconds", "ms", 1e-3],
      ["minutes", "min", 60],
      ["months (Common)", "mc", 2628000],
      ["nanoseconds", "ns", 1e-9],
      ["picoseconds", "ps", 1e-12],
      ["quarters (Common)", "qu", 7884000],
      ["seconds", "s", 1],
      ["shakes", "sh", 1e-8],
      ["weeks", "we", 604800],
      ["years (Common)", "y", 31536000],
    ]}
  }

  render() {
    return (
      <View>
        <View>
          <TextInput onChangeText={(leftValue) => this.setState({leftValue})} keyboardType='numeric'/>
          <Picker selectedValue={this.state.leftUnit} onValueChange={(itemValue, itemIndex) => this.setState({leftUnit: itemValue})}>
            {Object.keys(this.state.units).map((key) => {
              return (<Picker.Item label={this.state.units[key][0]} value={this.state.units[key][1]}/>)
            })}
          </Picker>
          <Picker selectedValue={this.state.rightUnit} onValueChange={(itemValue, itemIndex) => this.setState({rightUnit: itemValue})}>
            {Object.keys(this.state.units).map((key) => {
              return (<Picker.Item label={this.state.units[key][0]} value={this.state.units[key][1]}/>)
            })}
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

}

export class SpeedConverter extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = { /*leftValue: 1,*/ rightValue: 1, result: 0, leftUnit: "km/h", rightUnit: "km/h", units: [
      ["centimeters/minute", "c/m", 0.00016666666666666666],
      ["centimeters/second", "c/s", 0.01],
      ["feet/hour", "ft/h", 0.00008466683600033866],
      ["feet/minute", "ft/m", 0.00508],
      ["feet/second", "ft/s", 0.3048],
      ["inches/minute", "in/m", 0.0004233341800016934],
      ["inches/second", "in/s", 0.0254],
      ["kilometers/hour", "km/h", 0.2777777777777778],
      ["kilometers/second", "km/s", 1000],
      ["knots", "kn", 0.5144444444444444444],
      ["meters/hour", "m/h", 0.0002777777777777778],
      ["meters/minute", "m/m", 0.016666666666666666],
      ["meters/second", "m/s", 1],
      ["miles/hour", "mph", 0.44704],
      ["miles/minute", "mpm", 26.8224],
      ["miles/second", "mps", 1609.344],
      ["speed of light", "sol", 2.9979e8],
      ["speed of sound", "sos", 343],
      ["yards/hour", "y/h", 0.000254000508001016],
      ["yards/minute", "y/m", 0.01524],
      ["yards/second", "y/s", 0.9144],
    ]}
  }

  render() {
    return (
      <View>
        <View>
          <TextInput onChangeText={(leftValue) => this.setState({leftValue})} keyboardType='numeric'/>
          <Picker selectedValue={this.state.leftUnit} onValueChange={(itemValue, itemIndex) => this.setState({leftUnit: itemValue})}>
            {Object.keys(this.state.units).map((key) => {
              return (<Picker.Item label={this.state.units[key][0]} value={this.state.units[key][1]}/>)
            })}
          </Picker>
          <Picker selectedValue={this.state.rightUnit} onValueChange={(itemValue, itemIndex) => this.setState({rightUnit: itemValue})}>
            {Object.keys(this.state.units).map((key) => {
              return (<Picker.Item label={this.state.units[key][0]} value={this.state.units[key][1]}/>)
            })}
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

}

export default App = StackNavigator({
    NavBar: {screen: NavScreen},
    Distance: {screen: DistanceConverter},
    Mass: {screen: MassConverter},
    Time: {screen: TimeConverter},
    Speed: {screen: SpeedConverter}
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