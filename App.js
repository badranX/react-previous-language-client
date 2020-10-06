import * as React from 'react';

import {StyleSheet, View, Text } from 'react-native';

import Words from './screens/words'
import CardScreen from './screens/card'
import Header from './components/header'

function App() {
  return (
  			<Words/>
  );
}


const styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
	},
	card: {
    		backgroundColor: '#fff',
				
  		}
	}
)
export default App;


