/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component
} = React;

var Test = require('./App/components/test');
var { Parse } = require('parse');
var { APP_ID, JS_KEY } = require('./App/config');
Parse.initialize(APP_ID, JS_KEY);

var Parse = require('parse').Parse;
// var ParseReact = require('parse-react');
// var ParseComponent = require('parse-react/class');

class Contextus extends Component {
  constructor() {
    super();
    // Initialize MyComponent
    // ...
  }
  //
  // // By extending ParseComponent, it is possible to observe queries
  // observe(props, state) {
  //   return {
  //     items: new Parse.Query('Feed')
  //   };
  // }
  //
  // {this.data.items.map((story, i) => {
  //   <Text>{story.title}</Text>
  // })}
  render() {
    // Render MyComponent
    // ...
    return (
      <Test/>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Contextus', () => Contextus);
