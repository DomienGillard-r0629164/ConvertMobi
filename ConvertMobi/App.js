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

  goToTemperatureConverter(){
    this.props.navigation.navigate('Temperature');
  }

  goToVolumeConverter(){
    this.props.navigation.navigate('Volume');
  }

}

export class AreaConverter extends React.Component {
  constructor(props)
  {
    super(props);
    this.state= { /*leftValue: 1,*/ rightValue: 1, result: 0, leftUnit: "m²", rightUnit: "m²", units: [
      ["acres",                      "ac",    4046.8564224],
      ["ares",                       "ar",    100],
      ["circular inches",            "cin",    0.000506707479],
      ["hectares",                   "hc",    1e4],
      ["hides",                      "hi",    485000],
      ["roods",                      "roo",    1011.7141056],
      ["square centimeters",         "cm²", 1e-4],
      ["square feet (US & UK)",      "ft²",    0.09290304],
      ["square feet (US survey)",    "fts²",    0.092903411613],
      ["square inches",              "in²",    0.00064516],
      ["square kilometers",          "km²", 1e6],
      ["square meters",              "m²",  1],
      ["square miles",               "mil²",    2589988.110336],
      ["square millimeters",         "mm²", 1e-6],
      ["squares (of timber)",        "ti²",    9.290304],
      ["square rods (or poles)",     "rd²",    25.29285264],
      ["square yards",               "ya²",    0.83612736],
      ["townships",                  "town",    93239571.972]
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

export class LengthConverter extends React.Component {
  constructor(props)
  {
    super(props);
    this.state= { /*leftValue: 1,*/ rightValue: 1, result: 0, leftUnit: "m", rightUnit: "m", units: [
      ["ångströms", "Å", 1e-10],
      ["astronomical units", "au", 149598550000],
      ["barleycorns", "byc", 0.008467],
      ["cables", "ca", 182.88],
      ["centimeters", "cm", 0.01],
      ["chains (surveyors')", "ch", 20.116840233680467360934721869444],
      ["decimeters", "dm", 0.1],
      ["ells (UK)", "ell", 0.875],
      ["ems (pica)", "em", 0.0042333],
      ["fathoms", "fa", 1.8288],
      ["feet (UK & US)", "ft", 0.3048],
      ["feet (US survey)", "fts", 0.30480060960121920243840487680975],
      ["furlongs", "fu", 201.168],
      ["hands", "ha", 0.1016],
      ["hectometers", "hm", 100],
      ["inches", "in", 0.0254],
      ["kilometers", "km", 1000],
      ["light years", "ly", 9.460528405e15],
      ["meters", "m", 1],
      ["micrometers", "µm", 1e-6],
      ["mil", "mmm", 0.0000254],
      ["miles (UK & US)", "mil", 1609.344],
      ["miles (nautical, international)", "mili", 1852],
      ["miles (nautical, UK)", "milu", 1853.184],
      ["millimeters", "mm", 0.001],
      ["nanometers", "nm", 1e-9],
      ["parsecs", "psc", 3.0856776e16],
      ["picometers", "pm", 1e-12],
      ["Scandinavian mile", "Scm", 10000],
      ["thou", "th", 0.0000254],
      ["yards", "yd", 0.9144]
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

export class ForceConverter extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = { /*leftValue: 1,*/ rightValue: 1, result: 0, leftUnit: "kN", rightUnit: "kN", units: [
      ["dynes",            "dyn", 1e-5],
      ["kilograms force",  "kgf", 9.80665],
      ["kilonewtons",      "kN",  1000],
      ["kips",             "ki",    4448.222],
      ["meganewtons",      "MN",  1e6],
      ["newtons",          "N",   1],
      ["pounds force",     "lbf", 4.4482216152605],
      ["poundals",         "pdl", 0.138255],
      ["sthène",           "sn",  1000],
      ["tonnes force",     "tf",    9806.65],
      ["tons force (UK)",  "tfuk",    9964.01641818352],
      ["tons force (US)",  "tfus",    8896.443230521]
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

export class TemperatureConverter extends React.Component {
  constructor(props)
  {
    super(props);

    const units = this.createUnits();
    const leftValue = 0;
    const rightValue = 0;
    const leftUnit = "Kelvin";
    const rightUnit = "Kelvin";
    
    this.state= { leftValue, rightValue, leftUnit, rightUnit, units };
  }

  createUnits()
  {
    let units = {}

    function define_unit(name, symbol, factor, term)
    {
      units[name] = { symbol: symbol, factor: factor, term: term};
    }

    define_unit("Celsius", "°C", 1, 273.15);
    define_unit("Fahrenheit", "°F", 5/9, 459.67);
    define_unit("Kelvin", "K", 1, 0);
    define_unit("Rankine", "°R" , 5/9, 0);
    define_unit("Réaumure", "°Ré", 5/4, 273.15);

    return units;
  }

  render() {
    console.log(`render(): this.state.leftValue = ${this.state.leftValue}`);
    return (
      <View>
        <View>
          <TextInput value={"" + this.state.leftValue} onChangeText={(leftValue) => this.setState({leftValue})} keyboardType='numeric'/>
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
          <Button title="Convert" onPress={() => this.convert()} />
        </View>
      </View>
    );
  }

  convert() {
    console.log(`this.state.units  = ${this.state.units}`);
    console.log(`this.state.rightUnit  = ${this.state.rightUnit}`);
    const { factor: fromValFactor, term: fromValTerm } = this.state.units[this.state.leftUnit];
    const { factor: toValFactor, term: toValTerm } = this.state.units[this.state.rightUnit];
    
    let inKelvin = (parseFloat(this.state.leftValue) + fromValTerm) * fromValFactor;
    this.setState({rightValue: (inKelvin / toValFactor) - toValTerm});
    console.log(`this.state.leftValue  = ${this.state.leftValue}`);
    console.log(`inKelvin  = ${inKelvin}`);
    console.log(`toValFactor = ${toValFactor}`);
    console.log(`toValTerm = ${toValTerm}`);
    console.log(`fromValFactor = ${fromValFactor}`);
    console.log(`fromValTerm = ${fromValTerm}`);
    //this.setState({rightValue: inKelvin});
  }

}



export class VolumeConverter extends React.Component {
  constructor(props)
  {
    super(props);
    this.state= { /*leftValue: 1,*/ rightValue: 1, result: 0, leftUnit: "m³", rightUnit: "m³", units: [
      ["acre foot",               "acf",       1233481.83754752],
      ["barrels (oil)",           "bbl",    158.987294928],
      ["bushels (UK)",            "bsu",       36.36872],
      ["bushels (US)",            "bss",       35.23907016688],
      ["centiliters",             "cli",       0.01],
      ["cubic centimeters",       "cm³",    1e-3],
      ["cubic decimeters",        "dm³",    1],
      ["cubic decameters",        "dc³",       1e6],
      ["cubic feet",              "ft³",    28.316846592],
      ["cubic inches",            "in³",       0.016387064],
      ["cubic kilometers",        "km³",       1e12],
      ["cubic meters",            "m³",     1e3],
      ["cubic mile",              "mil³",       4.168181825e12],
      ["cubic millimeters",       "mlm³",       1e-6],
      ["cubic yards",             "ya³",       764.554857984],
      ["cups",                    "cu",       0.2365882365],
      ["deciliters",              "dli",       0.1],
      ["dram (imperial)",         "dri",       0.0035516328125000],
      ["dram (US)",               "dru",       0.0036966911953125],
      ["fluid ounces (imperial)", "fl oz",  0.0284130625],
      ["fluid ounces (US)",       "fl oz",  0.0295735295625],
      ["gallons (imperial)",      "gal",    4.54609],
      ["gallons, dry (US)",       "gad",       4.40488377086],
      ["gallons, liquid (US)",    "gall",    3.785411784],
      ["gill (imperial)",         "gi",     0.1420653125],
      ["gill (US)",               "giu",     0.11829411825],
      ["kiloliters",              "kl",     1e3],
      ["liters",                  "l", 1],
      ["liters (1901-1964)",      "L",       1.000028],
      ["milliliters",             "ml",     1e-3],
      ["microliters",             "µl",     1e-6],
      ["nanoliters",              "nl",     1e-9],
      ["picoliters",              "pl",     1e-12],
      ["pints (imperial)",        "pt",     0.56826125],
      ["pints, dry (US)",         "ptd",       0.5506104713575],
      ["pints, liquid (US)",      "ptl",     0.473176473],
      ["quarts (imperial)",       "qt",     1.1365225],
      ["quarts, dry (US)",        "qtd",       1.101220942715],
      ["quarts, liquid (US)",     "qtl",     0.946352946],
      ["table spoons",            "ta",       0.01478676478125],
      ["tea spoons",              "te",       0.00492892159375]
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
    Area: {screen: AreaConverter},
    Length: {screen: LengthConverter},
    Mass: {screen: MassConverter},
    Time: {screen: TimeConverter},
    Speed: {screen: SpeedConverter},
    Force: {screen: ForceConverter},
    Temperature: {screen: TemperatureConverter},
    Volume: {screen: VolumeConverter}
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