import { StatusBar } from 'expo-status-bar';
import React from 'react';
import SearchInput from '../components/SearchInput'
import { Button } from 'react-native-elements';

import {
	View,
StyleSheet,
Text,
KeyboardAvoidingView,
Platform,
TextInput,
} from 'react-native';

export default class OrignalSentence extends React.Component {
	render() {
  	return (
					<View style={styles.container}>
						<View style={styles.home}>
							<Button style={{}} title="Home" raised icon={{name: 'cached'}}/>
						</View>
						<View style={{flex:0.1}} />
						<View style={styles.words}>
							<Button style={{}} title="Gehen, gegangen..." raised icon={{name: 'cached'}}/>
						</View>
					</View>
  	);
}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		flexDirection: 'row',
		borderWidth: 0.5,
		borderRadius: 6,
		borderColor: '00EE63',
		padding:5,
		backgroundColor: '#F9E966',
		//overflow: 'hidden'
	},
	words: {
		flex: 10,
	},
	home: {
		flex: 1,
	}
}
)
