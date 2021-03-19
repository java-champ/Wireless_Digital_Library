import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import TransactionScreen from "./screens/transactionScreen";
import SearchScreen from "./screens/searchScreen";

export default class App extends React.Component {
  render(){
    return (
        <AppContainer/>
      )
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const TabNavigator = createBottomTabNavigator({
  TransactionScreen:{Screen:TransactionScreen},
  SearchScreen:{Screen:SearchScreen}
})

const AppContainer = createAppContainer(TabNavigator)